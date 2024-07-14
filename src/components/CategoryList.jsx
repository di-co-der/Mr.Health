import React from "react";

const CategoryList = ({ categories, onCategoryClick }) => {
  return (
    <div className="mt-4 pb-2 border-b-4 border-b-[#d9d9d9]">
      <h3 className="font-semibold pl-4">Most searched Categories</h3>
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
                index === 1 || index === 2 ? " w-11" : "w-15"
              }`}
            >
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
