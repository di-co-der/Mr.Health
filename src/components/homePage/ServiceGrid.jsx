import React from "react";
import { useNavigate } from "react-router-dom";
import bookAppointmentIcon from "../../assets/book_appointment.png";

import onlineConsultationIcon from "../../assets/online_consultation.png";
import getMedicinesIcon from "../../assets/get_medicines.png";
import bookLabTestsIcon from "../../assets/book_lab_tests.png";
import discoverHospitalsIcon from "../../assets/discover_hospitals.png";
import insurancePlansIcon from "../../assets/insurance_plans.png";

const services = [
  {
    name: "Book Appointment",
    icon: bookAppointmentIcon,
    route: "/book-appointment",
  },
  {
    name: "Online Consultation",
    icon: onlineConsultationIcon,
    route: "/online-consultation",
  },
  { name: "Get Medicines", icon: getMedicinesIcon, route: "/get-medicines" },
  { name: "Book Lab Tests", icon: bookLabTestsIcon, route: "/book-lab-tests" },
  {
    name: "Discover Hospitals",
    icon: discoverHospitalsIcon,
    route: "/discover-hospitals",
  },
  {
    name: "Insurance Plans",
    icon: insurancePlansIcon,
    route: "/insurance-plans",
  },
];

const ServiceGrid = () => {
  const navigate = useNavigate();

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <div className="grid grid-cols-3 gap-4 px-4 py-5">
      {services.map((service) => (
        <div
          key={service.name}
          className="flex flex-col items-center bg-[#0e3386] shadow-md rounded-xl cursor-pointer transition-all duration-100 hover:outline outline-1 outline-black"
          onClick={() => handleServiceClick(service.route)}
        >
          <img
            src={service.icon}
            alt={service.name}
            className="w-full h-28 object-cover rounded-t-xl"
          />
          <span className="text-center text-sm text-white font-normal p-2 leading-tight max-w-[90px]">
            {service.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
