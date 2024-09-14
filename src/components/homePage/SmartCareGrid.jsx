import React from "react";
import { useNavigate } from "react-router-dom";

//assets
import DiabetesCare from "../../assets/svgs/DiabetesCare.svg";
import PregnancyCare from "../../assets/svgs/PregnancyCare.svg";
import BabyCare from "../../assets/svgs/BabyCare.svg";
import WeightLoss from "../../assets/WeightLoss.webp";
import MuscleGain from "../../assets/MuscleGain.webp";
import DentalCare from "../../assets/DentalCare.webp";
import FungalInfection from "../../assets/FungalInfection.webp";
import BeautyCare from "../../assets/beautyCare.webp";
import SkinCare from "../../assets/Korean-skincare.webp";

const SmartHealth = [
  {
    name: "Mother's Fitness",
    icon: DiabetesCare,
    route: "/Pregnancy-Car",
  },
  {
    name: "Pregnancy Complications",
    icon: PregnancyCare,
    route: "/pregnancy-care",
  },
  {
    name: "Stretch Marks",
    icon: BabyCare,
    route: "/Pregnancy-Car",
  },
  {
    name: "Healthy Diet Plans",
    icon: WeightLoss,
    route: "/Pregnancy-Car",
  },
  {
    name: "Baby Kicks",
    icon: MuscleGain,
    route: "/Pregnancy-Car",
  },
  {
    name: "Postpartum Nutrition",
    icon: DentalCare,
    route: "/Pregnancy-Car",
  },
  {
    name: "Postpartum Weight Loss ?",
    icon: FungalInfection,
    route: "/Pregnancy-Car",
  },
  {
    name: "Reduce Hair Falls",
    icon: BeautyCare,
    route: "/Pregnancy-Car",
  },
  {
    name: "Boost Breast Milk",
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
    <div className="border-b-4 py-4 bg-[#d7f1f4]">
      <div className="flex items-center justify-center">
        <h3 className="font-semibold text-white bg-[#0086ff] rounded-3xl py-1.5 px-10 mb-5 mt-2">
          For Your Smart Health
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-4 px-4 mb-2">
        {SmartHealth.map((SmartHealth) => (
          <div
            key={SmartHealth.name}
            className="flex flex-col items-center shadow-md bg-[#fbf4f4] border border-[#f5d900] rounded-lg cursor-pointer transition-all duration-100 outline outline-1 outline-[#0000003e] hover:outline-2 hover:outline-[#f5d900]"
            onClick={() => handleServiceClick(SmartHealth.route)}
          >
            <img
              src={SmartHealth.icon}
              alt={SmartHealth.name}
              className="w-full h-24 object-cover rounded-t-lg"
            />
            <span className="text-center text-sm text-[#0086ff] font-bold py-1.5 leading-tight">
              {SmartHealth.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmartHealthGrid;
