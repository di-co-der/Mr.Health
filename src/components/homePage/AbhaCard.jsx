import React from "react";

// assets
import CreateAbha from "../../assets/svgs/CreateAbha.svg";
import UploadFile from "../../assets/svgs/UploadFile.svg";

function AbhaCard() {
  return (
    <div className="outline outline-1 outline-gray-200 flex justify-around items-center p-2 mb-4 mx-4 rounded-lg shadow-md">
      <div className="outline-2 outline outline-gray-200 hover:outline-gray-300 py-1 rounded-xl flex flex-col cursor-pointer">
        <img
          src={CreateAbha}
          alt="ABHA Card"
          className="w-40 object-cover rounded-md"
        />
        <h3 className="text-center font-semibold text-sm leading-5">
          Create <p>ABHA</p>
        </h3>
      </div>

      {/* Center Section: Create Your Digital Health Account */}
      <div className="text-center flex flex-col gap-2">
        <h2 className="text font-semibold text-blue-800 px-2 leading-5">
          Create Your Digital Health Account
        </h2>
        <div className="flex flex-col gap-0.5">
        <p className="text-[11px] tracking-tighter text-gray-600">
          Be a part of the Revolutionizing
        </p>
        <p className="text-red-600 italic text-xs">Health India Mission</p>
        </div>
      </div>

      <div className="outline-2 outline outline-gray-200 hover:outline-gray-300  rounded-xl pb-1 flex flex-col cursor-pointer">
        <img
          src={UploadFile}
          alt="Upload Documents"
          className="w-40 object-cover rounded-md"
        />
        <h3 className="text-center font-semibold text-sm leading-5">
          Upload Documents
        </h3>
      </div>
    </div>
  );
}

export default AbhaCard;
