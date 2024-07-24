import React from "react";
import FixedHeader from "./components/FixedHeader";
import AppointmentCard from "./components/AppointmentCard";
import ServiceGrid from "./components/ServiceGrid";
import ImageSlider from "./components/ImageSlider";
import HealthCheckupSlider from "./components/HealthCheckupSlider";
import SymptomsTracker from "./components/SymptomsTracker";
import BookYourAppointments from "./components/BookYourAppointments";
import FooterList from "./components/FooterList";

const HomePage = () => {
  return (
    <div className="select-none min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-sm w-full bg-white rounded-lg overflow-hidden relative">
        <FixedHeader />
        <div className="pt-[10.2rem]">
          {" "}
          <AppointmentCard />
          <ServiceGrid />
          <ImageSlider />
          <SymptomsTracker />
          <HealthCheckupSlider />
          <ImageSlider />
          <BookYourAppointments />
          <FooterList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
