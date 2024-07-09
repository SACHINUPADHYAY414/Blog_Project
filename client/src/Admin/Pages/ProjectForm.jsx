import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ProjectForm = () => {
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [tech, setTech] = useState("");
  const [price, setPrice] = useState("");
  const [demo_link, setDemoLink] = useState("");
  const [buy, setBuy] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiUrl = "http://localhost:5000/api/project/createProject";
      const data = {
        title,
        description,
        image,
        tech,
        price,
        demo_link,
        buy
      };

      const response = await axios.post(apiUrl, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json"
        }
      });

      setTitle("");
      setDescription("");
      setImage("");
      setTech("");
      setPrice("");
      setDemoLink("");
      setBuy("");

      toast.success("Project added successfully");
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error adding Project. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl text-gray-600 font-bold text-center mb-4 mt-4 px-4 py-4">
        <span className="text-blue-600">Add</span> Project
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="max-w-md mx-auto font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="image" className="max-w-md mx-auto font-semibold">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="tech" className="max-w-md mx-auto font-semibold">
            Technologies
          </label>
          <input
            type="text"
            id="tech"
            value={tech}
            onChange={(e) => setTech(e.target.value.toUpperCase())}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="max-w-md mx-auto font-semibold"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="price" className="max-w-md mx-auto font-semibold">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="demo_link" className="max-w-md mx-auto font-semibold">
            Demo Link
          </label>
          <input
            type="text"
            id="demo_link"
            value={demo_link}
            onChange={(e) => setDemoLink(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label htmlFor="buy" className="max-w-md mx-auto font-semibold">
            Buy
          </label>
          <input
            type="text"
            id="buy"
            value={buy}
            onChange={(e) => setBuy(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
