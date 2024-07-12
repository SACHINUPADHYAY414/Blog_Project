import React, { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className=" mx-auto px-4 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between ">
          <div className="flex items-center cursor-none">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            <h3 className="text-xl font-bold">SACHIN UPADHYAY</h3>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div
          className={`md:flex items-center mt-4 md:mt-0 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <a
              className="my-1 text-xl text-gray-800 font-bold md:text-2xl hover:text-gray-900 md:mx-4 md:my-0"
              href="/"
            >
              Home
            </a>
            <a
              className="my-1 text-xl text-gray-800 font-bold md:text-2xl hover:text-gray-900 md:mx-4 md:my-0"
              href="/Projects"
            >
              Projects
            </a>
            <a
              className="my-1 text-xl text-gray-800 font-bold md:text-2xl hover:text-gray-900 md:mx-4 md:my-0"
              href="/Notes"
            >
              Notes
            </a>
            <a
              className="my-1 text-xl text-gray-800 font-bold md:text-2xl hover:text-gray-900 md:mx-4 md:my-0"
              href="/About"
            >
              About
            </a>
            <a
              className="my-1 text-xl text-gray-800 font-bold md:text-2xl hover:text-gray-900 md:mx-4 md:my-0"
              href="/ContactMe"
            >
              ContactMe
            </a>
            <a
              className="my-1 text-xl text-gray-800 font-bold md:text-2xl hover:text-gray-900 md:mx-4 md:my-0"
              href="/Login"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
