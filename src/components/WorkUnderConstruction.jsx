import React from "react";
import { Link } from "react-router-dom";

const UnderConstruction = ({
  title = "Under Construction",
  message = "We’re working hard to bring something awesome.",
  buttonText = "Back to Home",
  buttonLink = "/",
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-4">
      <div className="bg-yellow-400 p-6 rounded-full shadow-lg mb-4">
        <svg
          className="w-16 h-16 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 13l4 4L21 7"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-md">{message}</p>
      <p className="mb-8"> Stay tuned!</p>
      <p className="text-sm text-gray-600">©medico</p>
      <Link
        to={buttonLink}
        className="mt-14 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default UnderConstruction;
