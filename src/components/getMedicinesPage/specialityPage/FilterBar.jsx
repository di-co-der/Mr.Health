// import React, { useState } from "react";
// import { FaFilter } from "react-icons/fa6";
// import { FaAngleDown } from "react-icons/fa6";

// const FilterBar = ({ onFilterChange }) => {
//   const [discount, setDiscount] = useState("");
//   const [tags, setTags] = useState({
//     delivery: false,
//     plus: false,
//     clinic: false,
//   });

//   const handleTagChange = (tag) => {
//     const updatedTags = { ...tags, [tag]: !tags[tag] };
//     setTags(updatedTags);
//     onFilterChange({ discount, tags: updatedTags });
//   };

//   const handleDiscountChange = (e) => {
//     const newDiscount = e.target.value;
//     setDiscount(newDiscount);
//     onFilterChange({ discount: newDiscount, tags });
//   };

//   return (
//     <div className="py-3 px-2 text-sm flex space-x-1 border-t-2 border-b-2 border-gray-300">
//       <div className="flex items-center gap-2">
//         <select
//           value={discount}
//           onChange={handleDiscountChange}
//           className="text-gray-700 bg-white border-2 border-gray-400 rounded-full px-2 py-1 appearance-none outline-none"
//         >
//           <option value="">Select Discount</option>
//           <option value="50%">Above 50%</option>
//           <option value="30%">Above 30%</option>
//           <option value="20%">Above 20%</option>
//         </select>
//       </div>
      
//       <button
//         onClick={() => handleTagChange("delivery")}
//         className={`px-2 py-2 rounded-full border-2 text-gray-700 ${
//           tags.delivery
//             ? "bg-blue-500 text-white border-blue-500"
//             : "border-gray-400"
//         }`}
//       >
//         Delivery within 2 Days
//       </button>

//       <button
//         onClick={() => handleTagChange("plus")}
//         className={`px-2 py-2 rounded-full border-2 text-gray-700 ${
//           tags.plus
//             ? "bg-blue-500 text-white border-blue-500"
//             : "border-gray-400"
//         }`}
//       >
//         PLUS
//       </button>

//       <button
//         onClick={() => handleTagChange("clinic")}
//         className={`px-2 py-2 rounded-full border-2 text-gray-700 ${
//           tags.clinic
//             ? "bg-blue-500 text-white border-blue-500"
//             : "border-gray-400"
//         }`}
//       >
//         Clinic
//       </button>

//       <button className="px-4 rounded-full text-[#0b237c] text-sm inline-flex items-center font-medium">
//         <FaFilter className="mt-[3px] mr-1" />
//         Apply Filters
//       </button>
//     </div>
//   );
// };

// export default FilterBar;

import React from "react";

//assets
import FilterIcon from "../../../assets/svgs/FilterIcon.svg";

const FilterBar = ({ filters, selectedFilters = [], onFilterSelect }) => {
  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      onFilterSelect(selectedFilters.filter((f) => f !== filter));
    } else {
      onFilterSelect([...selectedFilters, filter]);
    }
  };

  return (
    <div className="flex items-center sticky top-32 px-2 py-2 border-y-2 border-gray-300 bg-white">
      <div className="filter-container flex space-x-2 py-1 px-1 border-r-2 border-gray-300 overflow-x-auto">
        {filters.map((filter, index) => (
          <button
            key={index}
            onClick={() => toggleFilter(filter)}
            className={`px-4 py-2 border rounded-full text-sm whitespace-nowrap ${
              selectedFilters.includes(filter)
                ? "bg-[#e5f9f9] border-[#00cccc] border text-black"
                : "border-gray-500 text-black"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-1.5 w-[350px] tiny:w-72 py-1 ml-2 text-[#0086ff] font-medium cursor-default">
      <img src={FilterIcon} alt="" className="w-6 h-6" />
        Apply Filters
      </button>


      <style>{`
        .filter-container::-webkit-scrollbar {
          display: none; /* Hide scrollbar in WebKit browsers */
        }

        .filter-container {
          -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
          scrollbar-width: none; /* Hide scrollbar in Firefox */
        }
      `}</style>
    </div>
  );
};

export default FilterBar;

