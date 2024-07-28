import React from "react";
import FixedHeader from "../components/homePage/FixedHeader";
import AppointmentCard from "../components/homePage/AppointmentCard";
import ServiceGrid from "../components/homePage/ServiceGrid";
import ImageSlider from "../components/homePage/ImageSlider";
import HealthCheckupSlider from "../components/homePage/HealthCheckupSlider";
import SymptomsTracker from "../components/homePage/SymptomsTracker";
import BookYourAppointments from "../components/homePage/BookYourAppointments";
import FooterList from "../components/homePage/FooterList";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-sm w-full bg-white rounded-lg overflow-hidden relative">
        <FixedHeader />
        <div className="pt-[9.6rem]">
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
