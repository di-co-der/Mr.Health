import React from 'react'

const SymptomsTrackerList = ({ categories, onCategoryClick }) => {
  return (
    <div className="pb-2">
      <div className="p-4 grid grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => onCategoryClick(category.name)} 
          >
            <img
              src={category.icon}
              alt={category.name}
              className="w-16 h-16 object-contain hover:scale-95 rounded-full"
            />
            <p
              className={`text-sm text-gray-700 mt-1 text-center break-words font-semibold ${
                index === 0 || index === 1 || index === 2 || index === 7 ? "w-[65px]" : "w-15"
              }`}
            >
              {category.name}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full mt-4 mb-2 flex justify-center items-center">
        <p className='bg-[#ccf5f5] py-3 px-24 rounded-md text-lg cursor-pointer hover:outline outline-1 transition-all'>View All Symptoms</p>
      </div>
    </div>
  );
};

export default SymptomsTrackerList;
