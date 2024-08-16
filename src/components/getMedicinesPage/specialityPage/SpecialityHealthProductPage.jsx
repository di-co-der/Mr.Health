import React, { useState, useEffect } from "react";

//components
import Header from "../../../components/getMedicinesPage/Header";
import LocationDropdown from "../../../components/getMedicinesPage/LocationDropdown";
import SearchBar from "../../../components/getMedicinesPage/SearchBar";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import NoProductCard from "./NoProductCard";


//assets
import Cart from "../../../assets/svgs/Cart.svg";

//data
import healthProduct from "../../../data/healthProduct";
import { useNavigate } from "react-router-dom";

function SpecialityHealthProductPage({ category, title }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
  
    const filters = [
      "Discount above 10%",
      "Delivery within 2 Days",
      "PLUS",
      "Clinic",
    ];
  
    const filterhealthProduct = () => {
      let filtered = healthProduct.filter(
        (product) => product.category === category
      );
  
      if (selectedFilters.length > 0) {
        filtered = filtered.filter((product) => {
          return selectedFilters.every((filter) => {
            if (filter === "Discount above 10%") {
              const discount = parseFloat(product.discount.replace("%", ""));
              return discount > 10;
            }
            return product.tags.includes(filter);
          });
        });
      }
  
      if (searchTerm) {
        filtered = filtered.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
      return filtered;
    };
  
    const filteredhealthProduct = filterhealthProduct();
  
    const handleSearch = (term) => setSearchTerm(term);
  
    const handleFilterSelect = (filters) => setSelectedFilters(filters);
  
    const handleProductSelect = (product, isSelected) => {
      setSelectedProducts((prevSelected) => {
        if (isSelected) {
          return [...prevSelected, product];
        } else {
          return prevSelected.filter((p) => p.id !== product.id);
        }
      });
    };

    const totalItems = selectedProducts.length;
    const totalPrice = selectedProducts.reduce((sum, product) => {
      const mrp = parseFloat(product.MRP.replace("₹", ""));
      const discount = parseFloat(product.discount.replace("%", ""));
      const price = parseInt(mrp - (mrp * discount) / 100);
      return sum + price;
    }, 0);

    const navigate = useNavigate(); 

    const handleFooterClick = () => {
      if (totalItems > 0) {
        navigate('/mycart'); // Navigate to MyCart if items are in the cart
      } else {
        // Handle case when cart is empty (optional)
      }
    };

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
          filteredhealthProduct.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              highlightedFilters={selectedFilters}
              onProductSelect={handleProductSelect}
            />
          ))
        ) : (
          <NoProductCard />
        )}
      </div>
    </div>

    <footer
        className={`fixed bottom-0 inset-x-5 mb-4 rounded-lg flex items-center text-white py-4 font-semibold text-lg cursor-pointer transition-colors duration-200 ${
          totalItems > 0
            ? "bg-[#00cccc] justify-between text-center px-4"
            : "justify-between px-4 bg-gradient-to-br from-[#f403c9] to-[#37329a] font-semibold text-lg"
        }`}
        onClick={handleFooterClick}
      >
        <div className="text-sm">
          {totalItems} Items | ₹{totalPrice}
        </div>
        <div className="flex items-center gap-2">
          <img src={Cart} alt="Cart" className="cart-icon" />
          <span>{totalItems > 0 ? "View Cart" : "Add to Cart"}</span>
        </div>
      </footer>
  </div>
  )
}

export default SpecialityHealthProductPage