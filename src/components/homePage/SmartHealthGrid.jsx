import React from "react";
import { useNavigate } from "react-router-dom";

//assets
import DiabetesCare from "../../assets/svgs/DiabetesCare.svg"
import PregnancyCare from "../../assets/svgs/PregnancyCare.svg"
import BabyCare from "../../assets/svgs/BabyCare.svg"
import WeightLoss from "../../assets/WeightLoss.webp"
import MuscleGain from "../../assets/MuscleGain.webp"
import DentalCare from "../../assets/DentalCare.webp"
import FungalInfection from "../../assets/FungalInfection.webp"
import BeautyCare from "../../assets/beautyCare.webp"
import SkinCare from "../../assets/Korean-skincare.webp"

const SmartHealth = [
  {
    name: "Diabetes Care",
    icon: DiabetesCare,
    route: "/Pregnancy-Car",
  },
  {
    name: "Pregnancy Care",
    icon: PregnancyCare,
    route: "/Pregnancy-Care",
  },
  { 
    name: "Baby Care", 
    icon: BabyCare,
    route: "/Pregnancy-Car"
 },
  { 
    name: "Weight Loss",
    icon: WeightLoss, 
    route: "/Pregnancy-Car"
 },
  {
    name: "Muscle Gain",
    icon: MuscleGain,
    route: "/Pregnancy-Car",
  },
  {
    name: "Dental Care",
    icon: DentalCare,
    route: "/Pregnancy-Car",
  },
  {
    name: "Fungal Infection",
    icon: FungalInfection,
    route: "/Pregnancy-Car",
  },
  {
    name: "Beauty Care",
    icon: BeautyCare,
    route: "/Pregnancy-Car",
  },
  {
    name: "Skin Care",
    icon: SkinCare,
    route: "/Pregnancy-Car",
  },
];

function SmartHealthGrid() {
  const navigate = useNavigate();

  const handleServiceClick = (route) => {
    navigate(route);
  };
  return (
    <div className="border-b-4 py-4">
      <h3 className="pl-2 font-bold text-[#0086FF] m-3">
        For Your Smart Health
      </h3>
      <div className="grid grid-cols-3 gap-2 px-4 mb-4">
        {SmartHealth.map((SmartHealth) => (
          <div
            key={SmartHealth.name}
            className="flex flex-col items-center shadow-xl rounded-xl cursor-pointer transition-all duration-100 hover:outline outline-1 outline-[#00CCCC]"
            onClick={() => handleServiceClick(SmartHealth.route)}
          >
            <img
              src={SmartHealth.icon}
              alt={SmartHealth.name}
              className="w-full h-20 object-cover rounded-t-xl"
            />
            <span className="text-center text-sm font-bold p-2 leading-tight max-w-[90px]">
              {SmartHealth.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmartHealthGrid;
