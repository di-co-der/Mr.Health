import React, { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const FilterBar = ({ onFilterChange }) => {
  const [open247, setOpen247] = useState(false);
  const [distance, setDistance] = useState(5);

  const handleOpen247Change = () => {
    setOpen247(!open247);
    onFilterChange({ open247: !open247, distance });
  };

  const handleDistanceChange = (e) => {
    const newDistance = parseInt(e.target.value);
    setDistance(newDistance);
    onFilterChange({ open247, distance: newDistance });
  };

  return (
    <div className="py-4 px-3 flex space-x-2 border-t-2 border-b-2 border-gray-300">
      <button
        onClick={handleOpen247Change}
        className={`px-2 py-2 rounded-full border-2  ${
          open247
            ? "bg-blue-500 text-white border-blue-500"
            : " border-gray-400 "
        }`}
      >
        24/7 Open
      </button>

      <div className="flex items-center border-2 border-gray-400 rounded-full px-2 gap-1">
        <select
          value={distance}
          onChange={handleDistanceChange}
          className=" text-gray-700 appearance-none outline-none cursor-pointer"
        >
          <option value={5}>Within 5 Km</option>
          <option value={10}>Within 10 Km</option>
          <option value={15}>Within 15 Km</option>
        </select>
        <div>
          <FaAngleDown className=" mt-1 w-3 text-gray-700" />
        </div>

        <style>
          {`select option:checked {
              background-color: #4a90e2;
              color: white;
            }`}
        </style>
      </div>
      {/* <div className="line border-l-1 border-zinc-700 h-10 w-1 bg-gray-100"></div> */}
      <button className="px-4 rounded-full text-[#0b237c] inline-flex items-center font-medium">
        <FaFilter className="mt-[3px]" />
        Apply Filters
      </button>
    </div>
  );
};

export default FilterBar;
