import React from "react";
import SymptomsTrackerHeadingSVG from "../../assets/svgs/SymptomsTrackerHeadingSVG.svg";
import SymptomsTrackerList from "./symptomsTracker/SymptomsTrackerList";

import generalPhysicianIcon from "../../assets/general_physician.png";
import dentalIcon from "../../assets/dental.png";
import skinHairIcon from "../../assets/skin_hair.png";
import boneJointsIcon from "../../assets/bone_joints.png";
import womensHealthIcon from "../../assets/womens_health.png";
import childSpecialistIcon from "../../assets/child_specialist.png";
import sexualDisordersIcon from "../../assets/sexual_disorders.png";
import mentalWellnessIcon from "../../assets/mental_wellness.png";

const SymptomsTracker = () => {
    // const navigate = useNavigate();
  
    const categories = [
      { name: "Stomach Pain", icon: generalPhysicianIcon },
      { name: "Gas & Acidity", icon: dentalIcon },
      { name: "Bone & Joint pain", icon: boneJointsIcon },
      { name: "Pimples & Acne", icon: skinHairIcon },
      { name: "Stress & Anxiety", icon: womensHealthIcon },
      { name: "Sexual Disorders", icon: sexualDisordersIcon },
      { name: "Pregnancy Issues", icon: childSpecialistIcon },
      { name: "Hair Issues", icon: mentalWellnessIcon },
    ];
  
    const handleCategoryClick = (categoryName) => {
      const routeMap = {
        //have to change this
        "Stomach Pain": "/general-physician",
        "Gas & Acidity": "/dental-care",
        "Bone & Joint pain": "/skin-hair",
        "Pimples & Acne": "/bone-joints",
        "Stress & Anxiety": "/womens-health",
        "Sexual Disorders": "/child-specialist",
        "Pregnancy Issues": "/sexual-disorders",
        "Hair Issues": "/mental-wellness",
      };
      const route = routeMap[categoryName];
      if (route) {
        navigate(route);
      }
    };
  

  return (
    <div>
      <div className="pb-4 pt-2 border-b-4 border-zinc-300">
        <div className="py-4 pl-4 rounded flex items-start gap-5">
          <div className="w-14 h-14">
            <img
              src={SymptomsTrackerHeadingSVG}
              alt="Not Feeling Well Img"
              className="w-14"
            />
          </div>

          <div className="">
            <h2 className="text-2xl font-bold mb-2 text-[#292929] leading-none">
              Symptoms Tracker
            </h2>
            <p className="leading-5 text-[#525252]">
              Get insights on common symptoms from <br /> top specialists
            </p>
          </div>
        </div>
        <SymptomsTrackerList 
            categories={categories}
            onCategoryClick={handleCategoryClick}
        />{" "}

      </div>
    </div>
  );
}

export default SymptomsTracker;
