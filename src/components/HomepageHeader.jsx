import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const HomepageHeader = ({ companyName = "Medico" }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleNotificationClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center mt-1">
        <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
      </div>

      <div className="flex-1 text-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          {/* {companyName} */}
        </h1>
      </div>

      <div className="flex items-center">
        <button
          className="relative text-gray-600 text-2xl"
          onClick={handleNotificationClick}
        >
          <IoNotifications />
          <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
        </button>

        {showAlert && (
          <div className="absolute top-14 right-0 bg-white border border-gray-300 rounded-lg shadow-lg p-4 flex items-center space-x-2">
            <div className="text-gray-800">No new notification</div>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setShowAlert(false)}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default HomepageHeader;
