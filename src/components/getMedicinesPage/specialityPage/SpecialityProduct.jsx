import React, { useState, useEffect } from "react";
import Header from "../../../components/getMedicinesPage/Header";
import LocationDropdown from "../../../components/getMedicinesPage/LocationDropdown";
import SearchBar from "../../../components/getMedicinesPage/SearchBar";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import NoProductCard from "./NoProductCard";

//data
import medicines from "../../../data/medicines";

function SpecialityProduct({ category, title }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = [
    "Discount above 20%",
    "Delivery within 2 Days",
    "PLUS",
    "Clinic",
  ];

  const filterMedicines = () => {
    let filtered = medicines.filter(
      (medicine) => medicine.category === category
    );

    if (selectedFilters.length > 0) {
      filtered = filtered.filter((medicine) => {
        return selectedFilters.every((filter) => {
          if (filter === "Discount above 20%") {
            const discount = parseFloat(medicine.discount.replace("%", ""));
            return discount > 20;
          }
          return medicine.tags.includes(filter);
        });
      });
    }

    if (searchTerm) {
      filtered = filtered.filter((medicine) =>
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredMedicines = filterMedicines();

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

        <div className="flex flex-wrap gap-4 mt-4">
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map((medicine) => (
              <ProductCard
                key={medicine.id}
                medicine={medicine}
                highlightedFilters={selectedFilters}
              />
            ))
          ) : (
            <NoProductCard />
          )}
        </div>
      </div>
    </div>
  );
}

export default SpecialityProduct;
