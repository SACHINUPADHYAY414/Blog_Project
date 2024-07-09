import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/project/getAllProjects");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched data:", data);
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleBuyClick = (project_id) => {
    console.log("Clicked on project_id:", project_id);
    navigate(`/projectdetails/${project_id}`);
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full">
      <h2 className="text-3xl font-bold text-start mb-4 mt-4 px-4 py-4">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 ml-4 mr-4">
        {projects.map((project) => (
          <ProjectCard 
            key={project.project_id} 
            project={project} 
            onBuyClick={() => handleBuyClick(project.project_id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
