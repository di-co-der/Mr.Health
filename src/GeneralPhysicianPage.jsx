import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import LocationDropdown from "./components/LocationDropdown";
import FilterBar from "./components/FilterBar";
import DoctorCard from "./components/DoctorCard";

const GeneralPhysicianPage = () => {
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
      id: 1,
      name: "Dr. Samir Mukharjee",
      specialty: "General Physician",
      image:
        "https://th.bing.com/th/id/OIP.Ok1mB-FLP00ZPZqdwhQCCAHaGc?w=236&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      rating: 92,
      stories: 1421,
      experience: "24 Years",
      fees: "₹700",
      location: "1.2 Km",
      nextSlot: "10 Sept",
      open247: true,
    },
    {
      id: 2,
      name: "Dr. Raja Selvarajan",
      specialty: "General Physician",
      image:
        "https://th.bing.com/th/id/OIP._B3m9FMx8Kf3AFPu6qMBDgHaHa?pid=ImgDet&w=195&h=195&c=7&dpr=1.4",
      rating: 88,
      stories: 549,
      experience: "15 Years",
      fees: "₹500",
      location: "8.7 Km",
      nextSlot: "9 Sept",
      open247: false,
    },
    {
      id: 3,
      name: "Dr. Renu Sachdeva",
      specialty: "General Physician",
      image:
        "https://th.bing.com/th/id/OIP.ekvDs4eR62ihqv9m8Tr1OQHaE8?pid=ImgDet&w=195&h=130&c=7&dpr=1.4", // replace with actual image URL
      rating: 92,
      stories: 1421,
      experience: "12 Years",
      fees: "₹600",
      location: "14.2 Km",
      nextSlot: "12 Sept",
      open247: true,
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
  
  const navigate = useNavigate();

  const handleDoctorClick = (doctorId, specialty) => {
    // navigate(`doctor/${doctorId}`);
    // navigate(`/book-appointment/${specialty}/doctor/${doctorId}`);
    navigate(`/book-appointment/general-physician/doctor/${doctorId}`);
  };

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
        <Header title="General Physician" onClick={handleAppointmentClick} />
        <LocationDropdown
          locations={locations}
          defaultLocation={defaultLocation}
        />
        <SearchBar onSearch={handleSearch} />
        <FilterBar onFilterChange={handleFilterChange} />
        <div className="p-4">
          {filteredDoctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              doctor={doctor}
              onClick={() => handleDoctorClick(doctor.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralPhysicianPage;
