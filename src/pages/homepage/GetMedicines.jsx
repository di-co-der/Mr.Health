import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import Header from "../../components/getMedicinesPage/Header";
import LocationDropdown from "../../components/getMedicinesPage/LocationDropdown";
import SearchBar from "../../components/getMedicinesPage/SearchBar";
import Upload from "../../components/getMedicinesPage/Upload"
import Category from "../../components/getMedicinesPage/Category"

//assets
//Medicines
import ayurvedicMedicines from '../../assets/svgs/getMedicines/AyurvedicMedicines.svg'
import deaddictionMedicines from '../../assets/svgs/getMedicines/DeaddictionMedicines.svg'
import diabeticCare from '../../assets/svgs/getMedicines/DiabeticCare.svg'
import feverHeadache from '../../assets/svgs/getMedicines/Fever&Headache.svg'
import gasDigestion from '../../assets/svgs/getMedicines/Gas&Digestion.svg'
import metabolicSystem from '../../assets/svgs/getMedicines/MetabolicSystem.svg'
import skinHairCare from '../../assets/svgs/getMedicines/Skin&HairCare.svg'
import vitaminsSupplements from '../../assets/svgs/getMedicines/Vitamins&Supplements.svg'
import CoughCold from '../../assets/svgs/getMedicines/Cough&Cold.svg'
//Health Products
// import CovidEssentials from '../../assets/svgs/getMedicines/CovidEssentials.svg'
// import SkinHairCare from '../../assets/svgs/getMedicines/SkinHairCare.svg'
// import VitaminsMinerals from '../../assets/svgs/getMedicines/VitaminsMinerals.svg'
// import SexualWellness from '../../assets/svgs/getMedicines/SexualWellness.svg'
// import HealthFoodDrinks from '../../assets/svgs/getMedicines/HealthFoodDrinks.svg'
// import BabyCare from '../../assets/svgs/getMedicines/BabyCare.svg'
// import HealthcareDevices from '../../assets/svgs/getMedicines/HealthcareDevices.svg'
// import DiabeticCare1 from '../../assets/svgs/getMedicines/DiabeticCare1.svg'
// import ProteinSupplements from '../../assets/svgs/getMedicines/ProteinSupplements.svg'

function GetMedicines() {

  const handleSearch = (term) => setSearchTerm(term);

  const categories = [
    { name: "Cough & Cold", icon: CoughCold },
    { name: "Gas & Digestion", icon: gasDigestion },
    { name: "Fever & Headache", icon: feverHeadache },
    { name: "Diabetic Care", icon: diabeticCare },
    { name: "Skin & Hair Care", icon: skinHairCare },
    { name: "Metabolic System", icon: metabolicSystem },
    { name: "Deaddiction Medicines", icon: deaddictionMedicines },
    { name: "Ayurvedic Medicines", icon: ayurvedicMedicines },
    { name: "Vitamins & Supplements", icon: vitaminsSupplements },
  ];

  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    const routeMap = {
      "Cough & Cold": "/get-medicines/Cough-Cold",
      "Gas & Digestion": "/get-medicines/Gas-Digestion",
      "Fever & Headache": "/get-medicines/Fever-Headache",
      "Diabetic Care": "/get-medicines/Diabetic-Care",
      "Skin & Hair Care": "/get-medicines/Skin-HairCare",
      "Metabolic System": "/get-medicines/Metabolic-System",
      "Deaddiction Medicines": "/get-medicines/Deaddiction-Medicines",
      "Ayurvedic Medicines": "/get-medicines/Ayurvedic-Medicines",
      "Vitamins & Supplements": "/get-medicines/Vitamins & Supplements",
    };
    const route = routeMap[categoryName];
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="pb-4 max-w-sm mx-auto min-h-screen flex justify-center">
      <div className="max-w-sm w-full">
        <header className="pt-12">
          <Header title="Medico Pharmacy" />
        </header>

        <LocationDropdown
          locations={[
            "Agra",
            "Delhi",
            "Bengaluru",
            "Chennai",
            "Kolkata",
            "Mumbai",
          ]}
          defaultLocation="Mumbai"
        />
        <SearchBar onSearch={handleSearch} />
        <Upload />
        <Category
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
        <div className="pb-4"></div>
      </div>
    </div>  )
}

export default GetMedicines