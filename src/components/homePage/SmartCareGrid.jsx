import React from "react";
import { useNavigate } from "react-router-dom";

//assets
import MothersFitness from "../../assets/MothersFitness.png";
import PregnancyComplications from "../../assets/PregnancyComplications.png";
import StretchMarks from "../../assets/StretchMarks.png";
import HealthyDiet from "../../assets/HealthyDiet.png";
import BabyKicks from "../../assets/BabyKicks.png";
import PostpartumNutrition from "../../assets/PostpartumNutrition.png";
import PostpartumWeightLoss from "../../assets/PostpartumWeightLoss.png";
import ReduceHairFalls from "../../assets/ReduceHairFalls.png";
import BoostBreastMilk from "../../assets/BoostBreastMilk.png";

const SmartHealth = [
  {
    name: "Mother's Fitness",
    icon: MothersFitness,
    route: "/Pregnancy-Car",
  },
  {
    name: "Pregnancy Complications",
    icon: PregnancyComplications,
    route: "/pregnancy-care",
  },
  {
    name: "Stretch Marks",
    route: "/Pregnancy-Car",
    icon: StretchMarks,
  },
  {
    name: "Healthy Diet Plans",
    icon: HealthyDiet,
    route: "/Pregnancy-Car",
  },
  {
    name: "Baby Kicks",
    icon: BabyKicks,
    route: "/Pregnancy-Car",
  },
  {
    name: "Postpartum Nutrition",
    icon: PostpartumNutrition,
    route: "/Pregnancy-Car",
  },
  {
    name: "Postpartum Weight Loss ?",
    icon: PostpartumWeightLoss,
    route: "/Pregnancy-Car",
  },
  {
    name: "Reduce Hair Falls",
    icon: ReduceHairFalls,
    route: "/Pregnancy-Car",
  },
  {
    name: "Boost Breast Milk",
    icon: BoostBreastMilk,
    route: "/Pregnancy-Car",
  },
];

function SmartHealthGrid() {
  const navigate = useNavigate();

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <div className="relative py-4 bg-[#d7f1f4]" style={{ clipPath: "polygon(0 2%, 50% 0 ,100% 2%, 100% 100%, 0 100%)" }}>
      <div className="flex items-center justify-center">
        <h3 className="font-semibold text-white bg-[#0086ff] rounded-3xl py-1.5 px-10 mb-5 mt-5">
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
            <span className="text-center text-sm text-[#0086ff] font-semibold py-1.5 leading-tight">
              {SmartHealth.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmartHealthGrid;
