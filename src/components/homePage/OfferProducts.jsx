import React from 'react'
import { useNavigate } from "react-router-dom";

function OfferProducts({ product }) {
    const mrp = parseFloat(product.MRP.replace("₹", ""));
    const discount = parseFloat(product.discount.replace("%", ""));
    const price = parseInt(mrp - (mrp * discount) / 100);
  
    const navigate = useNavigate();
    const handleCardClick = () => {
      // Log the product type for debugging
      console.log('Product Type:', product.type);
    
      // Check the product type to determine the route
      const routePrefix = product.type === 'health' ? '/health-product' : '/product';
      console.log('Navigating to:', `${routePrefix}/${product.id}`);
      
      navigate(`${routePrefix}/${product.id}`, { state: { product } });
    };
  return (
    <div>
    <div className="relative pt-4 rounded-md cursor-pointer hover:shadow-xl border-[2px] border-[#0086FF] mb-4 ml-4" onClick={handleCardClick}>
      <img
        src={product.image}
        alt={product.name}
        className="border-b-[2px] border-[#0086FF] h-28 w w-full p-4"
      />
      <div className="px-2">
        <p
          className="text-[#0086FF] text-center font-medium text-wrap leading-none truncate p-[2.5px]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.name}
        </p>

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
            {product.MRP}
          </span>
        </p>

        <p className="flex items-center gap-4 pb-1">
          <span className="bg-gradient-to-r from-[#FF00CC] to-[#333399] bg-clip-text text-transparent">
            ₹{price}
          </span>
          <div className="text-[10px] bg-red-500 text-white p-[1px] rounded-md px-1 text-nowrap">
            {product.discount} OFF
          </div>
        </p>
      </div>
    </div>
  </div>
  )
}

export default OfferProducts