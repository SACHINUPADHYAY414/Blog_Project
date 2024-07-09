import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AllOrders = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/projects/getAllOrder"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      
      setProject(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const handleDelete = async (project_id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/project/deleteproject/${project_id}`,
        {
          method: "DELETE"
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setProject(project.filter((project) => project.project_id !== project_id));
      toast.success(`project with project_id ${project_id} deleted successfully`);
      console.log(`Deleted project with project_id ${project_id}`);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };


  return (
    <div className='w-full h-full'>
      <div>
      <h2 className="text-3xl text-gray-600 font-bold text-start mb-4 mt-4 px-4 py-4">
        <span className="text-blue-600">All</span> Project Orders
      </h2>
        <div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 font-bold">
            <tr className="font-bold">
              <th
                scope="col"
                className="px-6 py-3  font-bold text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Order Id
              </th>
              <th
                scope="col"
                className="px-6 py-3  font-bold text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                User name
              </th>
              <th
                scope="col"
                className="px-6 py-3  font-bold text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Project Title
              </th>

              <th
                scope="col"
                className="px-6 py-3  font-bold text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3  font-bold text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3  font-bold text-center text-xs  text-gray-500 uppercase tracking-wider"
              >
               Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y text-center divide-gray-200">
            {project.map((project) => (
              <tr key={project.project_id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                  {project.project_id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {project.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <a
                    href={project.demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    View Project
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm ">
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
  )
}

export default AllOrders