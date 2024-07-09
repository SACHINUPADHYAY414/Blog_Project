import React from "react";

const PageNotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Page Not Found</h1>
        <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default PageNotFound;
