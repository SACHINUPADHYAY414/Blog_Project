import React, { useEffect } from "react";
import TeachSkills from "../TeachSkill/TeachSkills";
import Toolstack from "../Toolstack/Toolstack";
import Github from "../Github/Github";
import Projects from "../Projects/Projects";
import ContactUs from "../Contact/Contact";
import Notes from "../Notes/NotesPage";

const Home = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      animateWords();
    }, 10000);
    animateWords();

    return () => clearInterval(interval);
  }, []);

  const animateWords = () => {
    const wordsContainer = document.querySelector(".words-container");
    if (!wordsContainer) return;

    const words = wordsContainer.textContent.split(" ");
    wordsContainer.innerHTML = words
      .map((word) => `<span class="inline-block">${word}</span>`)
      .join(" ");

    const wordElements = wordsContainer.querySelectorAll("span");
    wordElements.forEach((word, index) => {
      setTimeout(() => {
        word.classList.add("animate");
      }, index * 200);
    });
  };

  return (
    <div className="min-h-full">
      <div className="bg-blue-500 text-gray-600 body-font">
        <div className="container mx-auto px-5 py-24 md:flex md:flex-row md:items-center">
          <div className="md:flex-grow md:w-1/2 md:pr-24 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="animate-bounce text-4xl sm:text-5xl mb-4 font-bold text-gray-900">
              <span className="words-container">WELCOME TO MY SITE</span>
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              A WEBSITE FOR WEB DEVELOPERS
            </p>
            <div className="flex justify-center">
              <a href="/Projects">
                <button className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg animate-pulse">
                  Read More
                </button>
              </a>
            </div>
          </div>
          <div className="md:max-w-lg md:w-full w-5/6 mx-auto">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://d1rdz15x9x7c4f.cloudfront.net/assets/payload-images/saas-development-profit-amplification.png"
            ></img>
          </div>
        </div>
      </div>
      <TeachSkills />
      <Toolstack />
      <Github />
      <Projects />
      <Notes />
      <ContactUs />
    </div>
  );
};

export default Home;
