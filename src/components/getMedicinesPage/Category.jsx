import React from 'react'

function Category({ categories, onCategoryClick }) {
  return (
    <div className="mt-4 pb-2 border-b-4 border-b-[#d9d9d9]">
    <h3 className="font-semibold pl-4">Most searched Categories</h3>
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {categories.map((category, index) => (
        <div
          key={index}
          className="p-1 mt-2 flex flex-col items-center cursor-pointer"
          onClick={() => onCategoryClick(category.name)} 
        >
          <img
            src={category.icon}
            alt={category.name}
            className="w-26 h-26 object-contain hover:scale-95"
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default Category