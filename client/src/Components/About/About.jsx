import React from "react";

const About = () => {
  return (
    <div className="w-full h-full">
      <div className="px-4 py-4">
        <h2 className="text-3xl font-bold text-left text-blue-500 mb-4">About <span className="text-black">Me</span></h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-2 md:space-x-4 px-6 justify-center mx-auto">
          <div className="md:w-1/2 h-full bg-blue-50 rounded-r-full animate-pulse">
            <img
              src="https://th.bing.com/th/id/OIP.TTcp40-kUK8cYFVhtVFHFQAAAA?w=474&h=474&rs=1&pid=ImgDetMain"
              alt="Profile"
              className=" md:h-[80vh] bg-cover bg-opacity-0"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl -mb-4 font-bold">Who I Am</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
