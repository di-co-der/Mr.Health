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
import ayurvedicMedicines from '../../assets/getMedicine/medicine/ayurvedicMedicines.png'
import CoughCold from '../../assets/getMedicine/medicine/Cough&Cold.png'
import deaddictionMedicines from '../../assets/getMedicine/medicine/deaddictionMedicines.png'
import diabeticCare from '../../assets/getMedicine/medicine/diabeticCare.png'
import feverHeadache from '../../assets/getMedicine/medicine/fever&Headache.png'
import gasDigestion from '../../assets/getMedicine/medicine/gas&Digestion.png'
import metabolicSystem from '../../assets/getMedicine/medicine/metabolicSystem.png'
import skinHairCare from '../../assets/getMedicine/medicine/skinHairCare.png'
import vitaminsSupplements from '../../assets/getMedicine/medicine/vitaminsSupplements.png'
//Health Products


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
      "Metabolic System": "/get-medicines/child-specialist",
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