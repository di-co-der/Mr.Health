import React from "react";

//assets
import FilterIcon from "../../assets/svgs/FilterIcon.svg";

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
