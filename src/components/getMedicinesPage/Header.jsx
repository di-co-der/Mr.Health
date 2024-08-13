import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//assets
import BackArrowIcon from "../../assets/svgs/BackArrow.svg";
import cartIcon from "../../assets/cartGetMedicines.jpg";

const Header = ({ title , onClick }) => {
  const navigate = useNavigate();
  const [isScaled, setIsScaled] = useState(false);

  const handleBack = () => {
    navigate(-1);
    setIsScaled(true);
    setTimeout(() => setIsScaled(false), 200);
  };

  return (
    <div className="z-[10000] fixed inset-x-0 top-0 flex items-center justify-between p-4 bg-white">
      <button
        onClick={handleBack}
        className={`text-3xl hover:scale-x-110 transition-all ${
          isScaled ? "scale-75" : ""
        }`}
      >
        <img src={BackArrowIcon} alt="BackArrowIcon" className="w-6" />
      </button>
      <h1 className="text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap mx-6">{title}</h1>
  
      <div className="flex items-end">
        <button
          className="relative text-gray-500 text-[32px] mt-1"
          // onClick={handleCartClick}
        >
          <img src={cartIcon} alt="cartIcon" className="w-6" />
          <span className="absolute top-0 right-0 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;