import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white">
      <div className="container mx-auto px-4 py-4 md:flex md:justify-between md:items-center">
        <div className="space-y-2 md:space-y-0 md:flex md:space-x-4">
          <h2 className="hover:text-yellow-500">DISCLAIMER</h2>
          <h2 className="hover:text-yellow-500">PRIVACY POLICY</h2>
        </div>

        <div className="mt-4 md:mt-0">
          <a href="https://portfoliosachinkumar.vercel.app/">
            <h3 className="text-yellow-400">Created By Sachin Upadhyay</h3>
          </a>
        </div>

        <ul className="flex mt-4 md:mt-0 space-x-4">
          <a
            href="/facebook"
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <FaFacebook className="text-white" />
            <li>Facebook</li>
          </a>
          <a
            href="/instagram"
            className="flex items-center space-x-2 hover:text-purple-400"
          >
            <FaSquareInstagram className="text-white" />
            <li>Instagram</li>
          </a>
          <a
            href="/github"
            className="flex items-center space-x-2 hover:text-green-400"
          >
            <FaGithub className="text-white" />
            <li>Github</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
