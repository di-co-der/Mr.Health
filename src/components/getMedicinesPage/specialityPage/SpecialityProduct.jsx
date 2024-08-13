import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import Header from "../../common/Header";
import SearchBar from "../../common/SearchBar";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard"; // You'll need to create this component
import NoProductCard from "./NoProductCard"; // You'll need to create this component

//data
import medicines  from "../../../data/medicines"; // Adjust the import path if necessary

function SpecialityProduct({ category, title }) {
    const [filteredMedicines, setFilteredMedicines] = useState([]);

  useEffect(() => {
    setFilteredMedicines(
      medicines.filter((medicine) => medicine.category === category)
    );
  }, [category]);

  const handleFilterChange = (filters) => {
    let updatedMedicines = medicines.filter(
      (medicine) => medicine.category === category
    );

    // Filter by discount
    if (filters.discount) {
      updatedMedicines = updatedMedicines.filter(
        (medicine) => parseFloat(medicine.discount) >= parseFloat(filters.discount)
      );
    }

    // Filter by tags
    if (filters.tags.delivery) {
      updatedMedicines = updatedMedicines.filter((medicine) =>
        medicine.tags.includes("Delivery within 2 Days")
      );
    }
    if (filters.tags.plus) {
      updatedMedicines = updatedMedicines.filter((medicine) =>
        medicine.tags.includes("PLUS")
      );
    }
    if (filters.tags.clinic) {
      updatedMedicines = updatedMedicines.filter((medicine) =>
        medicine.tags.includes("Clinic")
      );
    }

    setFilteredMedicines(updatedMedicines);
  };

  const handleSearch = (query) => {
    if (query) {
      const filtered = medicines.filter(
        (medicine) =>
          medicine.category === category &&
          medicine.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMedicines(filtered);
    } else {
      setFilteredMedicines(
        medicines.filter((medicine) => medicine.category === category)
      );
    }
  };

  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product-details/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
    <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
      <header className="pt-14">
        <Header title={title} />
      </header>

      <SearchBar onSearch={handleSearch} />
      <FilterBar onFilterChange={handleFilterChange} />
      <div className="p-4">
        {filteredMedicines.length === 0 ? (
          <NoProductCard />
        ) : (
          filteredMedicines.map((medicine, index) => (
            <ProductCard
              key={index}
              medicine={medicine}
              onClick={() => handleProductClick(medicine.id)}
            />
          ))
        )}
      </div>
    </div>
  </div>
  )
}

export default SpecialityProduct

 