import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import Header from "../../common/Header";
import SearchBar from "../../common/SearchBar";
import LocationDropdown from "../LocationDropdown";
import FilterBar from "./FilterBar";
import DoctorCard from "./DoctorCard";
import NoDoctorCard from "./NoDoctorCard";

//data
import { doctors } from "../../../data/doctors";

const SpecialtyDoctorsPage = ({ specialty, title }) => {
  const locations = [
    "Agra",
    "Delhi",
    "Bengaluru",
    "Chennai",
    "Kolkata",
    "Mumbai",
  ];
  const defaultLocation = "Mumbai";

  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    setFilteredDoctors(
      doctors.filter((doctor) => doctor.specialty === specialty)
    );
  }, [specialty]);

  const handleFilterChange = (filters) => {
    let updatedDoctors = doctors.filter(
      (doctor) => doctor.specialty === specialty
    );
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
      const filtered = doctors.filter(
        (doctor) =>
          doctor.specialty === specialty &&
          doctor.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(
        doctors.filter((doctor) => doctor.specialty === specialty)
      );
    }
  };

  const navigate = useNavigate();

  const handleDoctorClick = (doctorId, doctorName) => {
    navigate(
      `/book-appointment/${specialty
        .toLowerCase()
        .replace(/ /g, "-")}/${doctorName
        .toLowerCase()
        .replace(/[\s.]+/g, "-")}/${doctorId}`
    );
  };

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
        <header className="pt-14">
          <Header title={title} onClick={handleAppointmentClick} />
        </header>

        <LocationDropdown
          locations={locations}
          defaultLocation={defaultLocation}
        />
        <SearchBar onSearch={handleSearch} />
        <FilterBar onFilterChange={handleFilterChange} />
        <div className="p-4">
          {filteredDoctors.length === 0 ? (
            <NoDoctorCard />
          ) : (
            filteredDoctors.map((doctor, index) => (
              <DoctorCard
                key={index}
                doctor={doctor}
                onClick={() => handleDoctorClick(doctor.id, doctor.name)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialtyDoctorsPage;
