import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit
} from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiSpringboot
} from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiCss3 } from "react-icons/si";

function Techstack() {
  return (
    <div className="w-full h-full">
      <h2 className="text-3xl font-bold text-center mb-4 mt-4">
        <span className="text-blue-600">Skills</span> I work with{" "}
      </h2>
      <div className="flex flex-wrap justify-center items-center pb-10">
        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <FaHtml5 className="text-5xl text-orange-500" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <SiCss3 className="text-5xl text-blue-500" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <DiJavascript1 className="text-5xl text-yellow-500" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <SiTailwindcss className="text-5xl text-blue-400" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <DiNodejs className="text-5xl text-green-500" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <DiReact className="text-5xl text-blue-400" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <DiMongodb className="text-5xl text-green-400" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <DiGit className="text-5xl text-red-500" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <SiFirebase className="text-5xl text-yellow-500" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <SiRedux className="text-5xl text-purple-500" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <SiMui className="text-5xl text-blue-500" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <SiSpringboot className="text-5xl text-gray-500" />
        </div>

        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-full m-2">
          <SiPostgresql className="text-5xl text-blue-500" />
        </div>
      </div>
    </div>
  );
}

export default Techstack;
