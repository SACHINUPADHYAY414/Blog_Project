import React from "react";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiSpringboot
} from "react-icons/si";

function Toolstack() {
  return (
    <div className="w-full h-full">
      <h2 className="text-3xl font-bold text-center mb-4 mt-4"><span className="text-blue-500">Tool </span> I use</h2>
      <div className="flex justify-center items-center pb-10">
        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <SiVisualstudiocode className="text-5xl text-blue-500" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <SiSpringboot className="text-5xl text-gray-500" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <SiPostman className="text-5xl text-orange-500" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <SiVercel className="text-5xl text-gray-500" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <SiGithub className="text-5xl text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default Toolstack;
