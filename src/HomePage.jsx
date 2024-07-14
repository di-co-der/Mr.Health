import React from "react";
import { useNavigate } from "react-router-dom";
import HomepageHeader from "./components/HomepageHeader";
import LocationDropdown from "./components/LocationDropdown";
import SearchBar from "./components/SearchBar";
import ServiceGrid from "./components/ServiceGrid";
import ImageSlider from "./components/Slider";
import NotFeelingWell from "./assets/not-feeling-well.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/book-appointment");
  };

  const locations = [
    "Agra",
    "Bengaluru",
    "Chennai",
    "Delhi",
    "Kolkata",
    "Mumbai",
  ];
  const defaultLocation = "Mumbai";

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <HomepageHeader />
        {/* <Navbar /> */}
        <LocationDropdown
          locations={locations}
          defaultLocation={defaultLocation}
        />
        <SearchBar />
        <ServiceGrid />
        <ImageSlider />

        <div className="p-4">
          {/* <div className="grid grid-cols-2 gap-4 mb-4">
            <button
              onClick={handleBookAppointmentClick}
              className="p-4 bg-blue-500 text-white rounded"
            >
              Book Appointment
            </button>
            <button className="p-4 bg-blue-500 text-white rounded">
              Online Consultation
            </button>
            <button className="p-4 bg-blue-500 text-white rounded">
              Get Medicines
            </button>
            <button className="p-4 bg-blue-500 text-white rounded">
              Book Lab Tests
            </button>
            <button className="p-4 bg-blue-500 text-white rounded">
              Discover Hospitals
            </button>
            <button className="p-4 bg-blue-500 text-white rounded">
              Insurance Plans
            </button>
          </div> */}

          <div className="mb-4 py-4 rounded flex items-center justify-between">
            <img
              src={NotFeelingWell}
              alt="not-feeling-well img"
              className="w-24 h-auto mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Are you feeling unwell?
              </h2>
              <p>Get insights on common symptoms from top specialists</p>
            </div>
          </div>

          <div className="mb-4 p-4 bg-purple-100 rounded">
            <h2 className="text-lg font-semibold mb-2">
              Enhance Confidence with Breast Augmentation
            </h2>
            <p>Skilled & Experienced Surgeons</p>
            <p>Quality Implants</p>
            <button
              onClick={handleBookAppointmentClick}
              className="mt-2 p-2 bg-purple-500 text-white rounded"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
