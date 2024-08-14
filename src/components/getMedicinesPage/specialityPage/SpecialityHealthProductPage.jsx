import React, { useState, useEffect } from "react";
import Header from "../../../components/getMedicinesPage/Header";
import LocationDropdown from "../../../components/getMedicinesPage/LocationDropdown";
import SearchBar from "../../../components/getMedicinesPage/SearchBar";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import NoProductCard from "./NoProductCard";

//data
import healthProduct from "../../../data/healthProduct";

function SpecialityHealthProductPage({ category, title }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilters, setSelectedFilters] = useState([]);
  
    const filters = [
      "Discount above 10%",
      "Delivery within 2 Days",
      "PLUS",
      "Clinic",
    ];
  
    const filterhealthProduct = () => {
      let filtered = healthProduct.filter(
        (healthProduct) => healthProduct.category === category
      );
  
      if (selectedFilters.length > 0) {
        filtered = filtered.filter((healthProduct) => {
          return selectedFilters.every((filter) => {
            if (filter === "Discount above 10%") {
              const discount = parseFloat(healthProduct.discount.replace("%", ""));
              return discount > 10;
            }
            return healthProduct.tags.includes(filter);
          });
        });
      }
  
      if (searchTerm) {
        filtered = filtered.filter((healthProduct) =>
            healthProduct.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
      return filtered;
    };
  
    const filteredhealthProduct = filterhealthProduct();
  
    const handleSearch = (term) => setSearchTerm(term);
  
    const handleFilterSelect = (filters) => setSelectedFilters(filters);
  


  return (
    <div className="pb-4 max-w-sm mx-auto min-h-screen flex justify-center">
    <div className="max-w-sm w-full">
      <header className="pt-12">
        <Header title={title} />
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

      <FilterBar
        filters={filters}
        selectedFilters={selectedFilters}
        onFilterSelect={handleFilterSelect}
      />

      <div className="flex justify-between flex-wrap m-4">
        {filteredhealthProduct.length > 0 ? (
          filteredhealthProduct.map((healthProduct) => (
            <ProductCard
              key={healthProduct.id}
              medicine={healthProduct}
              highlightedFilters={selectedFilters}
            />
          ))
        ) : (
          <NoProductCard />
        )}
      </div>
    </div>
  </div>
  )
}

export default SpecialityHealthProductPage