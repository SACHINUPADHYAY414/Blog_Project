import React, { useState, useEffect } from 'react';

const AllProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.229.168:5000/projects');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = async (id) => {
   
    try {
      const response = await fetch(`http://192.168.229.168:5000/projects/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const projectToEdit = await response.json();
      console.log('Project to edit:', projectToEdit);
    } catch (error) {
      console.error('Error fetching project for edit:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://192.168.229.168:5000/projects/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setProjects(projects.filter(project => project.id !== id));
      console.log(`Deleted project with ID ${id}`);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
       <h2 className="text-3xl text-gray-600 font-bold text-start mb-4 mt-4 px-4 py-4">
        <span className="text-blue-600">Project</span> Orders
      </h2>
      <div className="mt-4 overflow-hidden border border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Language
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Total Download
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map(project => (
              <tr key={project.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{project.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.language}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.totalDownloads}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold">
                  <button className="text-indigo-600 hover:text-indigo-900" onClick={() => handleEdit(project.id)}>Edit</button>
                  <button className="ml-2 text-red-600 hover:text-red-900" onClick={() => handleDelete(project.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProject;
