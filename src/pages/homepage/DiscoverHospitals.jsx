import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import Header from "../../components/common/Header";
import LocationDropdown from "../../components/bookAppointmentPage/LocationDropdown";
import SearchBar from "../../components/common/SearchBar";
import HospitalCard from "../../components/discoverHospitalPage/HospitalCard";
import NoHospitalCard from "../../components/discoverHospitalPage/NoHospitalCard";
import FilterBar from "../../components/discoverHospitalPage/FilterBar";

//data
import hospitals from "../../data/hospitals";

const DiscoverHospitals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = [
    "24/7 Open",
    "Within 5 Km",
    "Endocrinology Test",
    "Diagnostic",
    // Add more filters as needed
  ];

  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesSearchTerm = hospital.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilters = selectedFilters.every((filter) =>
      hospital.tags.includes(filter)
    );
    return matchesSearchTerm && matchesFilters;
  });

  const handleSearch = (term) => setSearchTerm(term);

  const handleFilterSelect = (filters) => setSelectedFilters(filters);

  const navigate = useNavigate();
  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  return (
    <div className="pb-4 max-w-sm mx-auto min-h-screen flex justify-center">
      <div className="max-w-sm w-full">
        <header className="pt-12">
          <Header title="Discover Hospitals" onClick={handleAppointmentClick} />
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

        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital) => (
            <HospitalCard
              key={hospital.id}
              hospital={hospital}
              highlightedFilters={selectedFilters}
            />
          ))
        ) : (
          <NoHospitalCard />
        )}
      </div>
    </div>
  );
};

export default DiscoverHospitals;
