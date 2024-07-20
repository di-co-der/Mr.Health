import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import LocationDropdown from "./components/LocationDropdown";
import FilterBar from "./components/FilterBar";
import DoctorCard from "./components/DoctorCard";

const SkinHairPage = () => {
  const locations = [
    "Agra",
    "Delhi",
    "Bengaluru",
    "Chennai",
    "Kolkata",
    "Mumbai",
  ];
  const defaultLocation = "Mumbai";

  const [doctors, setDoctors] = useState([
    {
      name: "Dr. Alice Brown",
      specialty: "Dermatologist",
      image:
        "https://th.bing.com/th/id/OIP.Ok1mB-FLP00ZPZqdwhQCCAHaGc?w=236&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7", // replace with actual image URL
      rating: 95,
      stories: 1200,
      experience: "8 Years",
      fees: "₹900",
      location: "3.0 Km",
      nextSlot: "14 Sept",
      open247: true,
    },
    {
      name: "Dr. Bob White",
      specialty: "Dermatologist",
      image:
        "https://th.bing.com/th/id/OIP._B3m9FMx8Kf3AFPu6qMBDgHaHa?pid=ImgDet&w=195&h=195&c=7&dpr=1.4", // replace with actual image URL
      rating: 90,
      stories: 980,
      experience: "10 Years",
      fees: "₹850",
      location: "5.5 Km",
      nextSlot: "16 Sept",
      open247: false,
    },
  ]);

  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleFilterChange = (filters) => {
    let updatedDoctors = doctors;
    if (filters.open247) {
      updatedDoctors = updatedDoctors.filter((doctor) => doctor.open247);
    }
    updatedDoctors = updatedDoctors.filter(
      (doctor) => parseFloat(doctor.location) <= filters.distance
    );
    setFilteredDoctors(updatedDoctors);
  };

  const handleSearch = (query) => {
    if (query) {
      const filtered = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
        <Header title="Skin & Hair" />
        <LocationDropdown
          locations={locations}
          defaultLocation={defaultLocation}
        />
        <SearchBar onSearch={handleSearch} />
        <FilterBar onFilterChange={handleFilterChange} />
        <div className="p-4">
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkinHairPage;
