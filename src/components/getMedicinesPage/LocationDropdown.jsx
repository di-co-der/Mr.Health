import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";

const LocationDropdown = ({ locations, defaultLocation }) => {
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-4 pt-4 relative z-50" ref={dropdownRef}>
      <div
        className="text-sm font-semibold"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        Deliver to -{" "}
        <span className="text-blue-500 font-normal inline-flex items-center gap-1 cursor-pointer">
          {selectedLocation}{" "}
          <FaAngleDown
            className={`transition-transform mt-1 ${isDropdownOpen ? "transform -translate-x-1" : ""}`}
          />
        </span>
      </div>
      {isDropdownOpen && (
        <div className="absolute bg-white border rounded shadow-md mt-2 w-full z-10">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`p-2 text-sm cursor-pointer hover:bg-blue-100 ${
                location === selectedLocation ? "bg-blue-100" : ""
              }`}
              onClick={() => handleLocationChange(location)}
            >
              {location}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;
