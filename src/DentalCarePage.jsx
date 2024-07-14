import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import LocationDropdown from "./components/LocationDropdown";
import FilterBar from "./components/FilterBar";
import DoctorCard from "./components/DoctorCard";

const DentalCarePage = () => {
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
      name: "Dr. Jane Doe",
      specialty: "Dentist",
      image:
        "https://th.bing.com/th/id/OIP.Ok1mB-FLP00ZPZqdwhQCCAHaGc?w=236&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7", // replace with actual image URL
      rating: 92,
      stories: 1421,
      experience: "10 Years",
      fees: "₹800",
      location: "1.2 Km",
      nextSlot: "15 Sept",
      open247: true,
    },
    {
      name: "Dr. John Smith",
      specialty: "Dentist",
      image:
        "https://th.bing.com/th/id/OIP._B3m9FMx8Kf3AFPu6qMBDgHaHa?pid=ImgDet&w=195&h=195&c=7&dpr=1.4", // replace with actual image URL
      rating: 88,
      stories: 549,
      experience: "12 Years",
      fees: "₹700",
      location: "2.5 Km",
      nextSlot: "18 Sept",
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
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <Header title="Dental Care" />
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

export default DentalCarePage;
