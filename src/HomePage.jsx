import React from "react";
import { useNavigate } from "react-router-dom";
import FixedHeader from "./components/FixedHeader";
import ServiceGrid from "./components/ServiceGrid";
import ImageSlider from "./components/Slider";
import NotFeelingWell from "./assets/not-feeling-well.png";
import AppointmentCard from "./components/AppointmentCard";

const HomePage = () => {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/book-appointment");
  };

  // const handleSearch = (query) => {
  //   // Handle search query
  // };

  return (
    <div className="select-none min-h-screen bg-gray-100 flex justify-center">
      <div className="max-w-md w-full bg-white  rounded-lg overflow-hidden relative">
        <FixedHeader
        // onSearch={handleSearch}
        />
        <div className="pt-[21.5vh]">
          {" "}
          <AppointmentCard />
          <ServiceGrid />
          <ImageSlider />
          <div className="p-4">
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
    </div>
  );
};

export default HomePage;
