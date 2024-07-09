import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Dashboard = ({ children }) => {
  const location = useLocation();

  const sidebarItems = [
    { id: 1, label: "HOME", path: "/home" },
    { id: 2, label: "All Users", path: "/allusers" },
    { id: 3, label: "All Project", path: "/allproject" },
    { id: 4, label: "All Notes", path: "/notes" },
    { id: 5, label: "Project Form", path: "/projectform" },
    { id: 6, label: "Notes Form", path: "/notesform" },
    { id: 7, label: "Project Orders", path: "/projectorder" },
    { id: 8, label: "About", path: "/about" }
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(sidebarItems[0]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <header className="bg-white border-b border-gray-300 px-4 py-4 flex justify-between items-center">
        <h3 className="text-xl font-bold">ADMIN</h3>
        <ul className="flex space-x-3">
          <li className="cursor-pointer">Notification</li>
          <li className="cursor-pointer">Logout</li>
        </ul>
      </header>

      <main className="flex h-full w-full">
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <nav
          className={`bg-green-50 border-r border-gray-300 p-4 items-center justify-center py-3 w-48 ${
            isSidebarOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="">
            {sidebarItems.map((item) => (
              <Link to={item.path} key={item.id} className=" ">
                <li
                  className={`py-4 px-4 cursor-pointer text-gray-700 hover:bg-blue-500 hover:text-white rounded-l-full font-bold ${
                    selectedItem === item ? "font-bold" : ""
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        {/* Main content */}
        <section className="w-full h-full overflow-y-auto">{children}</section>
      </main>
    </div>
  );
};

export default Dashboard;
