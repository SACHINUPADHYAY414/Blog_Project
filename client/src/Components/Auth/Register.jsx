import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

// const API_URL = 'http://localhost:5000/api/auth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleRegister = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/register`, { name, email, password });
      console.log(response.data);

      console.log(name,"register successfull")
      toast.success("Register successful");
    } catch (error) {
      console.error(error.response.data);
      toast.error("Register failed");
    }
  };
  

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="grid gap-8">
        <div
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
        >
          <div className="border-[20px] border-transparent rounded-[20px] bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h1 className="pt-8 pb-6 font-bold text-gray-400 text-4xl text-center cursor-default">
              Register
            </h1>
            <form onSubmit={handleRegister} className="space-y-4">
            <div>
                <label htmlFor="email" className="mb-2 text-gray-400 text-lg">
                  Full Name
                </label>
                <input
                  id="name"
                  className="border p-3  text-black border-gray-100 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 rounded-lg w-full"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 text-gray-400 text-lg">
                  Email
                </label>
                <input
                  id="email"
                  className="border p-3  text-black border-gray-100 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 rounded-lg w-full"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 text-gray-400 text-lg"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="border p-3  text-black border-gray-100 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 rounded-lg w-full"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                className="bg-gradient-to-r text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                type="submit"
              >
                REGISTER
              </button>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3 className="text-gray-300">
                Already have an account?{" "}
                <a
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                  href="/login"
                >
                  <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Log In
                  </span>
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
