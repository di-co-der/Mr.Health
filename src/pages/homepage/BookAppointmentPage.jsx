import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import LocationDropdown from "../../components/bookAppointmentPage/LocationDropdown";
import SearchBar from "../../components/common/SearchBar";
import ConsultedDoctor from "../../components/bookAppointmentPage/ConsultedDoctor";
import NearbyDoctors from "../../components/bookAppointmentPage/NearbyDoctors";
import CategoryList from "../../components/bookAppointmentPage/CategoryList";

// assets
import generalPhysicianIcon from "../../assets/general_physician.png";
import dentalIcon from "../../assets/dental.png";
import skinHairIcon from "../../assets/skin_hair.png";
import boneJointsIcon from "../../assets/bone_joints.png";
import womensHealthIcon from "../../assets/womens_health.png";
import childSpecialistIcon from "../../assets/child_specialist.png";
import sexualDisordersIcon from "../../assets/sexual_disorders.png";
import mentalWellnessIcon from "../../assets/mental_wellness.png";
import doctorImage from "../../assets/doctor_image_url.png";
import doctorImage2 from "../../assets/doctor_image2_url.png";

const BookAppointmentPage = () => {
  const locations = [
    "Agra",
    "Bengaluru",
    "Chennai",
    "Delhi",
    "Kolkata",
    "Mumbai",
  ];
  const defaultLocation = "Mumbai";

  const doctor = {
    name: "Dr. Raja Selvarajan",
    specialty: "General Physician",
    lastConsultation: "Consulted on 5 Sept, 11:00 am",
    image: doctorImage,
  };

  const categories = [
    { name: "General Physician", icon: generalPhysicianIcon },
    { name: "Dental Care", icon: dentalIcon },
    { name: "Skin & Hair", icon: skinHairIcon },
    { name: "Bone & Joints", icon: boneJointsIcon },
    { name: "Women’s Health", icon: womensHealthIcon },
    { name: "Child Specialist", icon: childSpecialistIcon },
    { name: "Sexual Disorders", icon: sexualDisordersIcon },
    { name: "Mental Wellness", icon: mentalWellnessIcon },
  ];

  const doctorsNearby = [
    {
      name: "Doctor Nearby 1",
      image: doctorImage,
    },
    {
      name: "Doctor Nearby 2",
      image: doctorImage2,
    },
    {
      name: "Doctor Nearby 1",
      image: doctorImage,
    },
    {
      name: "Doctor Nearby 2",
      image: doctorImage2,
    },
  ];

  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    const routeMap = {
      "General Physician": "/book-appointment/general-physician",
      "Dental Care": "/book-appointment/dental-care",
      "Skin & Hair": "/book-appointment/skin-hair",
      "Bone & Joints": "/book-appointment/bone-joints",
      "Women’s Health": "/book-appointment/womens-health",
      "Child Specialist": "/book-appointment/child-specialist",
      "Sexual Disorders": "/book-appointment/sexual-disorders",
      "Mental Wellness": "/book-appointment/mental-wellness",
    };
    const route = routeMap[categoryName];
    if (route) {
      navigate(route);
    }
  };

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
        <header className="pt-14">
          <Header title="Book Appointment" onClick={handleAppointmentClick} />
        </header>
        <LocationDropdown
          locations={locations}
          defaultLocation={defaultLocation}
        />
        <SearchBar />
        <ConsultedDoctor doctor={doctor} />
        <CategoryList
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
        <NearbyDoctors doctors={doctorsNearby} />
      </div>
    </div>
  );
};

export default BookAppointmentPage;
