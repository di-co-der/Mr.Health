import React from "react";
import { useNavigate } from "react-router-dom";
//components
import StarRating from "../../../components/discoverHospitalPage/StarRating";

function ProductCard({ key, medicine }) {
// Remove the currency symbol from MRP and convert it to a number
const mrp = parseFloat(medicine[0].MRP.replace('₹', ''));

// Remove the percentage symbol from discount and convert it to a number
const discount = parseFloat(medicine[0].discount.replace('%', ''));

// Calculate the price after discount
const price = parseInt(mrp - (mrp * discount) / 100);
  return (
    <div
      className=" pt-4 w-48
      rounded-md cursor-pointer hover:shadow-xl border-[2px] border-[#0086FF]"
    >
      <img
        src={medicine[0].image}
        alt={medicine[0].name}
        className="border-b-[2px] border-[#0086FF]"
      />
      <div className="px-2">

      <p className="text-[#0086FF] text-center font-medium">
        {medicine[0].name}
      </p>
      <div className="flex justify-center items-center">
        <StarRating rating={medicine[0].rating} />
        <span className="ml-2 text-[#0086FF] font-medium text-sm italic">
          ({medicine[0].totalRating})
        </span>{" "}
      </div>

      <p className="text-sm">
  <span className="bg-gradient-to-r from-[#FF00CC] to-[#333399] bg-clip-text text-transparent">
    MRP
  </span>
  <span
    className="line-through bg-gradient-to-r from-[#FF00CC] to-[#333399] bg-clip-text text-transparent ml-1"
    style={{ WebkitTextFillColor: 'transparent', WebkitTextStroke: '0.005px black' }}
  >
    {medicine[0].MRP}
  </span>
</p>

<p className="flex items-center gap-4 pb-1">
  <span className="bg-gradient-to-r from-[#FF00CC] to-[#333399] bg-clip-text text-transparent">
  ₹{price}
  </span>
  <div className="text-sm bg-red-500 text-white p-[1px] rounded-md px-1">{medicine[0].discount} OFF</div>
</p>



      </div>
      
    </div>
  );
}

export default ProductCard;
