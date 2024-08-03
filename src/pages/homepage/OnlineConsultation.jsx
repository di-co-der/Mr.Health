import React from "react";
import { useNavigate } from "react-router-dom";

//components
import Header from "../../components/common/Header";
// import LocationDropdown from "../../components/onlineConsultationPage/LocationDropdown";
import SearchBar from "../../components/common/SearchBar";
// import ConsultedDoctor from "../../components/onlineConsultationPage/ConsultedDoctor";
import UploadReports from "../../components/onlineConsultationPage/UploadReports";
import NearbyDoctors from "../../components/onlineConsultationPage/NearbyDoctors";
import CategoryList2 from "../../components/onlineConsultationPage/CategoryList2";
import CategoryList from "../../components/bookAppointmentPage/CategoryList";

// assets
import stomachPainIcon from "../../assets/svgs/stomachPainIcon.svg";
import acidityIcon from "../../assets/svgs/acidityIcon.svg";
import boneIcon from "../../assets/svgs/boneIcon.svg";
import pimplesIcon from "../../assets/svgs/pimplesIcon.svg";
import stressIcon from "../../assets/svgs/stressIcon.svg";
import feverIcon from "../../assets/svgs/feverIcon.svg";
import bpIcon from "../../assets/svgs/bpIcon.svg";
import pregnancyIcon from "../../assets/svgs/pregnancyIcon.svg";

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

const OnlineConsultation = () => {

  const categories2 = [
    { name: "Stomach Pain", icon: stomachPainIcon },
    { name: "Gas & Acidity", icon: acidityIcon },
    { name: "Bone & Joint Pain", icon: boneIcon },
    { name: "Pimples & Acne", icon: pimplesIcon },
    { name: "Stress & Anxiety", icon: stressIcon },
    { name: "Headache & Fever", icon: feverIcon },
    { name: "High/Low BP", icon: bpIcon },
    { name: "PCOS & Pregnancy", icon: pregnancyIcon },
  ];

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

  const handleCategoryClick2 = (categoryName) => {
    const routeMap = {
      "Stomach Pain": "/online-consultation/stomach-pain",
      "Gas & Acidity": "/online-consultation/acidity",
      "Bone & Joint Pain": "/online-consultation/bone-joints",
      "Pimples & Acne": "/online-consultation/pimples-acne",
      "Stress & Anxiety": "/online-consultation/stress",
      "Headache & Fever": "/online-consultation/fever",
      "High/Low BP": "/online-consultation/bp",
      "PCOS & Pregnancy": "/online-consultation/pregnancy",
    };
    const route = routeMap[categoryName];
    if (route) {
      navigate(route);
    }
  };

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

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

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
        <header className="pt-14">
          <Header
            title="Video Consult a Doctor"
            onClick={handleAppointmentClick}
          />
        </header>

        <SearchBar />

        <CategoryList2
          categories={categories2}
          onCategoryClick={handleCategoryClick2}
        />
        <UploadReports />
        <CategoryList
          categories={categories}
          onCategoryClick={handleCategoryClick}
        />
        <NearbyDoctors doctors={doctorsNearby} />
      </div>
    </div>
  );
};

export default OnlineConsultation;
