import React from "react";
import FixedHeader from "../components/homePage/FixedHeader";
import AppointmentCard from "../components/homePage/AppointmentCard";
import AbhaCard from "../components/homePage/AbhaCard";
import ServiceGrid from "../components/homePage/ServiceGrid";
import ImageSlider from "../components/homePage/ImageSlider";
import HealthCheckupSlider from "../components/homePage/HealthCheckupSlider";
import SymptomsTracker from "../components/homePage/SymptomsTracker";
import BookYourAppointments from "../components/homePage/BookYourAppointments";
import Order from "../components/homePage/Order";
import FooterList from "../components/homePage/FooterList";
import HealthTips from "../components/homePage/HealthTips";
import SmartHealthGrid from "../components/homePage/SmartHealthGrid";
import SmartHealthGridSlider from "../components/homePage/SmartHealthGridSlider";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-sm w-full bg-white rounded-lg overflow-hidden relative">
        <FixedHeader />
        <div className="pt-[10.4rem]">
          {" "}
          {/* <AppointmentCard /> */}
          <AbhaCard />
          <ServiceGrid />
          <ImageSlider />
          <SmartHealthGrid />
          {/* <SmartHealthGridSlider /> */}
          <SymptomsTracker />
          <HealthCheckupSlider />
          <ImageSlider />
          <BookYourAppointments />
          <Order />
          <HealthTips />
          <FooterList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
