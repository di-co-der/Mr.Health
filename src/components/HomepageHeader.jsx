import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaUser, FaBell } from "react-icons/fa";

const HomepageHeader = ({ companyName = "Medico" }) => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
      </div>

      <div className="flex-1 text-center">
        <h1 className="text-2xl font-semibold text-gray-800">{companyName}</h1>
      </div>

      <div className="flex items-center">
        <button className="relative text-gray-600 text-2xl">
          <IoNotifications />
          <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default HomepageHeader;
