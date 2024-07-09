import React, { useState, useEffect } from "react";

const AllUsers = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/users/getAllUser"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  return (
    <div className='w-full h-full'>
    <div>
    <h2 className="text-3xl text-gray-600 font-bold text-start mb-4 mt-4 px-4 py-4">
      <span className="text-blue-600">All</span> Users
    </h2>
      <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 font-bold">
          <tr className="font-bold">
            <th
              scope="col"
              className="px-6 py-3  font-bold text-center text-xs  text-gray-500 uppercase tracking-wider"
            >
              User Id
            </th>
            <th
              scope="col"
              className="px-6 py-3  font-bold text-center text-xs  text-gray-500 uppercase tracking-wider"
            >
             Full Name
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
          {users.map((users) => (
            <tr key={users.users_id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-900">
                {users.users_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {users.fullName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {users.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm ">
                <button
                  className="ml-2 text-red-600 hover:text-red-900"
                //   onClick={() => handleDelete(users.users_id)}
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

export default AllUsers