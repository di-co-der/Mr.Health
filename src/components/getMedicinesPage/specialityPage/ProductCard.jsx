import React from "react";
import { MdThumbUp } from "react-icons/md";
import { MdMessage } from "react-icons/md";

function ProductCard() {
  return (
    <div
    className="p-4 border rounded-lg mb-4 shadow-md cursor-pointer hover:bg-slate-50 hover:outline outline-2 outline-gray-200"
    onClick={onClick}
  >
    <div className="flex items-center">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-16 h-16 rounded-full"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{doctor.name}</h3>
        <p className="text-sm font-medium text-gray-500">
          {doctor.specialty}
        </p>
        <div className="flex items-center mt-2">
          <span className="text-green-500">
            <MdThumbUp />
          </span>
          <span className="ml-1 italic font-medium text-gray-600">
            {doctor.rating}%
          </span>
          <span className="ml-3 mt-1 text-green-500">
            <MdMessage />
          </span>
          <span className="font-medium italic ml-1 text-gray-600">
            {doctor.stories} Patient Stories
          </span>
        </div>
      </div>
    </div>

    <div className="flex pt-2 mt-2 justify-around border-t-2 border-zinc-300">
      <div className="text-center">
        <p className="text-[#0f257ce5] font-medium">{doctor.experience}</p>
        <p className="text-sm text-gray-500 font-medium">Experience</p>
      </div>
      <div className="text-center">
        <p className="text-[#0f257ce5] font-medium">{doctor.fees}</p>
        <p className="text-sm text-gray-500 font-medium">Fees</p>
      </div>
      <div className="text-center">
        <p className="text-[#0f257ce5] font-medium">{doctor.location}</p>
        <p className="text-sm text-gray-500 font-medium">Location</p>
      </div>
      <div className="text-center">
        <p className="text-[#0f257ce5] font-medium">{doctor.nextSlot}</p>
        <p className="text-sm text-gray-500 font-medium">Next Slot</p>
      </div>
    </div>
  </div>
  )
}

export default ProductCard