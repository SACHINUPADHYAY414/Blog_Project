import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your_stripe_publishable_key");

const ProjectDetailsPage = () => {
  const { project_id } = useParams();
  const [project, setProject] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: ""
  });
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    mobile: false
  });

  useEffect(() => {
    const getProjectById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/project/getProject/${project_id}`
        );
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    getProjectById();
  }, [project_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Capitalize name field
    if (name === "name" && value.length > 0) {
      const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
      setFormData({
        ...formData,
        [name]: capitalizedValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }


    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: false
      });
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    let valid = true;
    const errors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = true;
        valid = false;
      }
    });

    if (!valid) {
      setFormErrors(errors);
      console.error("Please fill in all required fields.");
      return;
    }

    try {
      const stripe = await stripePromise;
      const response = await axios.post(
        `http://localhost:5000/api/payment/charge`,
        {
          projectId: project_id,
          ...formData
        }
      );
     
      const { error } = await stripe.redirectToCheckout({
        sessionId: response.data.sessionId
      });

      if (error) {
        console.error("Error redirecting to checkout:", error);
        setPaymentStatus("error");
      } else {
        setPaymentStatus("success");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      setPaymentStatus("error");
    }
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row md:w-3/4 bg-white p-6 rounded-lg shadow-md">
        <div className="md:w-1/2 md:pr-6">
          <img
            src={project.image}
            alt={project.title}
            className="h-96 md:h-full w-full object-cover mb-4 rounded-sm"
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-blue-600 font-sans">
              <span className="font-bold text-gray-500">Price: Rs</span>{" "}
              {project.price}
            </p>
            <p className="text-gray-500">
              Language: <span className="font-normal">{project.tech}</span>
            </p>
            <p className="text-gray-600 mb-4">
              Description: {project.description}
            </p>
            <h1 className="font-bold">Payment Details: </h1>
            <form onSubmit={handlePayment}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className={`mt-1 block w-full px-3 py-2 border ${
                      formErrors.name ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    placeholder="Enter your name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter your name.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={`mt-1 block w-full px-3 py-2 border ${
                      formErrors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    placeholder="Enter your email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="tel"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Mobile
                  </label>
                  <input
                    type="tel"
                    className={`mt-1 block w-full px-3 py-2 border ${
                      formErrors.mobile ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    placeholder="Enter your mobile number"
                    maxLength="10"
                    pattern="[0-9]{10}"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  {formErrors.mobile && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter a valid 10-digit mobile number.
                    </p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="py-2 px-4 rounded mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold"
              >
                Pay {project.price}
              </button>
            </form>
            {paymentStatus === "success" && (
              <p className="text-green-500 mt-2">Payment successful!</p>
            )}
            {paymentStatus === "error" && (
              <p className="text-red-500 mt-2">Payment failed. Please try again.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
