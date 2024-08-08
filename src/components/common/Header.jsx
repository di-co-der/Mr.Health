import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../../assets/svgs/BackArrow.svg";
import MyAppointmentsIcon from "../../assets/svgs/MyAppointmentsIcon.svg";

const Header = ({ title , onClick }) => {
  const navigate = useNavigate();
  const [isScaled, setIsScaled] = useState(false);

  const handleBack = () => {
    navigate(-1);
    setIsScaled(true);
    setTimeout(() => setIsScaled(false), 200);
  };

  return (
    <div className="z-[100] fixed inset-x-0 top-0 flex items-center justify-between p-4 bg-white">
      <button
        onClick={handleBack}
        className={`text-3xl hover:scale-x-110 transition-all ${
          isScaled ? "scale-75" : ""
        }`}
      >
        <img src={BackArrowIcon} alt="BackArrowIcon" className="w-6" />
      </button>
      <h1 className="text-lg font-semibold">{title}</h1>
      <button
        onClick={onClick}
        className={`text-3xl hover:scale-105 transition-all ${
          isScaled ? "scale-75" : ""
        }`}
      >
        <img src={MyAppointmentsIcon} alt="MyAppointmentsIcon" className="w-6" />
      </button>
    </div>
  );
};

export default Header;
