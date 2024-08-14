import React from "react";
import { useNavigate } from "react-router-dom";
//components
import StarRating from "../../../components/discoverHospitalPage/StarRating";

function ProductCard({medicine,highlightedFilters = [] }) {
  // Calculate the price after discount
  const mrp = parseFloat(medicine.MRP.replace("₹", ""));
  const discount = parseFloat(medicine.discount.replace("%", ""));
  const price = parseInt(mrp - (mrp * discount) / 100);

  return (


    <div
      className="relative pt-4 w-40 rounded-md cursor-pointer hover:shadow-xl border-[2px] border-[#0086FF]"
    >
      <input
        type="checkbox"
        className="absolute top-2 right-2 w-5 h-5 text-[#0086FF] border-2 border-[#0086FF] focus:ring-[#0086FF]"
      />
      <img
        src={medicine.image}
        alt={medicine.name}
        className="border-b-[2px] border-[#0086FF] h-48 w-full p-4"
      />
      <div className="px-2">
        <p className="text-[#0086FF] text-center font-medium">
          {medicine.name}
        </p>
        <div className="flex justify-center items-center">
          <StarRating rating={medicine.rating} />
          <span className="ml-2 text-[#0086FF] font-medium text-sm italic">
            ({medicine.totalRating})
          </span>
        </div>

        <p className="text-sm">
          <span className="bg-gradient-to-r from-[#FF00CC] to-[#333399] bg-clip-text text-transparent">
            MRP
          </span>
          <span
            className="line-through bg-gradient-to-r from-[#FF00CC] to-[#333399] bg-clip-text text-transparent ml-1"
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "0.005px black",
            }}
          >
            {medicine.MRP}
          </span>
        </p>

        <p className="flex items-center gap-4 pb-1">
          <span className="bg-gradient-to-r from-[#FF00CC] to-[#333399] bg-clip-text text-transparent">
            ₹{price}
          </span>
          <div className="text-sm bg-red-500 text-white p-[1px] rounded-md px-1">
            {medicine.discount} OFF
          </div>
        </p>

        {/* <div className="flex flex-wrap gap-2 mb-1 pl-1">
          {medicine.tags.map((tag, index) => (
            <span
              key={index}
              className={`border text-gray-800 px-2 py-1 rounded-md text-xs flex items-center ${
                highlightedFilters.includes(tag)
                  ? "bg-[#e5f9f9] border-[#00cccc]"
                  : "border-gray-500"
              }`}
            >
              {highlightedFilters.includes(tag) && (
                <svg
                  className="w-4 h-4 mr-1 text-[#00cccc]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
              {tag}
            </span>
          ))}
        </div> */}
      </div>
      </div>
  );
}

export default ProductCard;
