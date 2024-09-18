import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import ParacetamolDolo from "../../assets/svgs/ParacetamolDolo.svg";

const MedicineReminderCard = () => {
  return (
    <div className="mt-6 py-2 pb-4 bg-white border-2 border-[#0000001f] m-4 rounded-xl shadow-md">
      <div className="flex justify-between px-4">
        <div className="text-center w-80">
        <h3 className="text-lg font-semibold">Upcoming(P) medicine</h3>
        </div>
        <button className="text-gray-800 text-3xl">
          <IoMdNotificationsOutline />
        </button>
      </div>
      <div className="flex items-center px-2 my-2 w-full">
        {/* Medicine Image */}
        <img
          src={ParacetamolDolo}
          alt="Medicine"
          className="w-16 h-16 rounded-full"
        />

        {/* Medicine Info */}
        <div className="flex-0 w-52 ml-4">
          <div className="flex justify-between items-center"></div>
          <p className="font-medium">PCM 500mg</p>
          <p className="text-sm text-gray-700">1 Tablets</p>
        </div>

        {/* Medicine Time and Status */}
        <div className="flex flex-col gap-2 pr-4 items-end justify-between">
          <p className="text-sm text-gray-700">1:30 PM</p>

          {/* Progress Indicator */}
          <div className="flex space-x-1 mt-1">
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
            <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
            <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full pt-1 px-4">
        <button className="bg-gray-200 text-gray-600 py-2 w-36 rounded-full">
          Remind Later
        </button>
        <button className="bg-blue-500 text-white py-2 w-36 rounded-full">
          Done
        </button>
      </div>
    </div>
  );
};

export default MedicineReminderCard;
