import React from "react";

const ProjectCard = ({ project, onBuyClick }) => {
 
  return (
    <div className="max-w-sm rounded overflow-hidden drop-shadow-xl bg-white transition duration-150 ease-in-out hover:shadow-xl hover:-translate-y-3 mb-4">
      <img className="w-full h-48" src={project.image} alt={project.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{project.title}</div>
        <h3 className="items-center">Rs {project.price}</h3>
        <div className="px-6 py-2">
          {project.technologies && project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block w-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-700 text-base mb-2">{project.description}</p>
      </div>

      <div className="flex justify-center items-center gap-6 pb-4">
        <a href={project.demo_link} target="_blank" rel="noopener noreferrer">
          <button className="ring ring-blue-500 ring-offset-2 ring-offset-slate-50 red:ring-offset-slate-900 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out">
            Demo
          </button>
        </a>
        <button
          className="ring ring-blue-500 ring-offset-2 ring-offset-slate-50 red:ring-offset-slate-900 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out"
          onClick={() => onBuyClick(project.project_id)}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
