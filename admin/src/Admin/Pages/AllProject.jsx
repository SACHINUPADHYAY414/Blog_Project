import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProject = () => {
  const [projects, setProjects] = useState([]);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [updatedProject, setUpdatedProject] = useState({
    title: "",
    tech: "",
    price: "",
    image: " ",
    description: ""
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/project/getAllProjects"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = async (project_id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/project/updateProject/${project_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedProject)
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedProjectResponse = await response.json();
      console.log("Project updated successfully:", updatedProjectResponse);
      toast.success("Project updated successfully");

      fetchData();
      setEditingProjectId(null);
    } catch (error) {
      console.error("Error updating project:", error);
      toast.error("Error updating project");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProject((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const startEditing = (project) => {
    setEditingProjectId(project.project_id);
    setUpdatedProject({
      image: project.image,
      title: project.title,
      tech: project.tech,
      price: project.price,
      description: project.description
    });
  };

  const cancelEditing = () => {
    setEditingProjectId(null);
  };

  const handleDelete = async (project_id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/project/deleteProject/${project_id}`,
        {
          method: "DELETE"
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setProjects(
        projects.filter((project) => project.project_id !== project_id)
      );
      toast.success(
        `Project with project_id ${project_id} deleted successfully`
      );
      console.log(`Deleted project with project_id ${project_id}`);
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Error deleting project");
    }
  };

  return (
    <div className="py-6 px-4  h-full w-full">
      <div className="w-full mx-auto">
        <h2 className="text-3xl text-gray-600 font-bold text-start mb-4 mt-4 px-4 py-4">
          <span className="text-blue-600">All</span> Projects
        </h2>
        <div className=" mt-4 border border-gray-200 sm:rounded-lg">
          <table className="w-full divide-y divide-gray-300">
            <thead className="bg-gray-50 font-bold">
              <tr className="font-bold">
                <th className="px-6 py-3 text-xs text-gray-500 uppercase tracking-wider">
                  Project Id
                </th>
                <th className="px-6 py-3 text-xs text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-xs text-gray-500 uppercase tracking-wider">
                  image
                </th>
                <th className="px-6 py-3 text-xs text-gray-500 uppercase tracking-wider">
                  Language
                </th>
                <th className="px-6 py-3 text-xs text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-xs text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-xs text-gray-500 uppercase tracking-wider">
                  View Project
                </th>
                <th className="px-6 py-3 text-center text-xs text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className=" bg-white divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.project_id}>
                  <td className="px-6 py-4  text-sm text-gray-900">
                    {project.project_id}
                  </td>
                  <td className="px-6 py-4  text-sm text-gray-500 font-bold">
                    {editingProjectId === project.project_id ? (
                      <input
                        type="text"
                        name="title"
                        value={updatedProject.title}
                        onChange={handleInputChange}
                        className="border border-gray-300 px-2 py-1 w-full rounded-md"
                      />
                    ) : (
                      project.title
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {editingProjectId === project.project_id ? (
                      <input
                        type="text"
                        name="image"
                        value={updatedProject.image}
                        onChange={handleInputChange}
                        required
                        className="border border-gray-300 px-2 py-1 w-full rounded-md"
                      />
                    ) : (
                      project.image
                    )}
                  </td>
                  <td className="px-6  py-4  text-sm text-gray-500">
                    {editingProjectId === project.project_id ? (
                      <input
                        type="text"
                        name="tech"
                        value={updatedProject.tech}
                        onChange={handleInputChange}
                        className="border border-gray-300 px-2 py-1 w-full rounded-md"
                      />
                    ) : (
                      project.tech
                    )}
                  </td>
                  <td className="px-6 py-4  text-sm text-gray-500">
                    {editingProjectId === project.project_id ? (
                      <input
                        type="text"
                        name="description"
                        value={updatedProject.description}
                        onChange={handleInputChange}
                        className="border border-gray-300 px-2 py-1 w-full rounded-md"
                      />
                    ) : (
                      project.description
                    )}
                  </td>
                  <td className="px-6 py-4  text-center text-sm text-gray-500">
                    {editingProjectId === project.project_id ? (
                      <input
                        type="text"
                        name="price"
                        value={updatedProject.price}
                        onChange={handleInputChange}
                        className="border border-gray-300 px-2 py-1 w-full rounded-md text-center"
                      />
                    ) : (
                      project.price
                    )}
                  </td>
                  <td className="px-6 py-4  text-sm text-gray-500">
                    <a
                      href={project.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View Project
                    </a>
                  </td>
                  <td className="px-6 py-4  text-center text-sm">
                    {editingProjectId === project.project_id ? (
                      <>
                        <button
                          className="text-green-600 hover:text-green-900"
                          onClick={() => handleEdit(project.project_id)}
                        >
                          Save
                        </button>
                        <button
                          className="ml-2 text-red-600 hover:text-red-900"
                          onClick={cancelEditing}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="ml-2 text-red-600 hover:text-red-900"
                        onClick={() => startEditing(project)}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="ml-2 text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(project.project_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProject;
