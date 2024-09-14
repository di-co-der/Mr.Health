import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MethiSeedOil from "../../assets/svgs/MethiSeedOil.svg";
import HealthProductCard from "./HealthProductCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

//components
import Header from "../../components/common/Header";

//assets
import heart from "../../assets/svgs/Heart.svg";
import apple from "../../assets/svgs/Green Apple.svg";
import baby from "../../assets/svgs/Baby.svg";
import arrows from "../../assets/svgs/arrows.svg";
import lengthen from "../../assets/svgs/Lengthen.svg";
import scale from "../../assets/svgs/Scale.svg";

import MedicineReminderCard from "../../components/homePage/MedicineReminderCard";
import SmartCareGrid from "../../components/homePage/SmartCareGrid";
import ImageSlider from "../../components/homePage/ImageSlider";
import PregnancyExpertsCarousel from "./PregnancyExpertsCarousel";
import HealthTips from "../../components/homePage/HealthTips";
import Order from "../../components/homePage/Order";

function PregnancyCare() {
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "5%",
  };

  const buttons = [
    { label: "Baby Kick", icon: "👟" },
    { label: "Baby Kick", icon: "👟" },
    { label: "Pregnancy fitness", icon: "👶" },
  ];

  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-sm w-full bg-[#f2f6f9] shadow-md rounded-lg overflow-hidden">
        <header className="pt-16">
          <Header title="Pregnancy Care" onClick={handleAppointmentClick} />
        </header>

        <div className="">
          <Slider {...settings}>
            {buttons.map((button, index) => (
              <div key={index} className="p-2 outline-black">
                <button className="h-12 w-full rounded-xl shadow-lg outline-1 outline outline-[#00000035] bg-white flex items-center justify-center font-semibold text-nowrap">
                  <span>{button.icon}</span>
                  <span>{button.label}</span>
                </button>
              </div>
            ))}
          </Slider>
        </div>

        <div className="pt-4 p-4 m-3 shadow-md rounded-lg bg-white border-2 border-[#0086FF]">
          <div className="flex">
            <div className="icon">
              <img src={heart} className="pr-4" alt="Heart icon" />
            </div>
            <div className="heading">
              <div className="font-bold text-lg">Baby Growth Tracker</div>
              <div className="text-sm text-gray-500">
                15 weeks 2 days pregnant mother
              </div>
            </div>
          </div>

          <div className="pt-8 px-2">
            <div className="flex justify-between rounded-full border-2 p-[1px] py-[2px] border-[#00CCCC] bg-zinc-200 px-2">
              <button className="bg-white px-4 rounded-full border-2 border-[#0086FF] text-[#0086FF]">
                Today
              </button>
              <button>Weekly</button>
              <button>Trimester</button>
            </div>
          </div>

          <div className="mt-5 py-5">
            <div className="flex justify-center items-center gap-10">
              <div className="rounded-full p-3 bg-[#C4E49C]">
                <img src={apple}></img>
              </div>
              <div>
                <img src={arrows}></img>
              </div>
              <div className="rounded-full p-3 bg-[#F9CC80]">
                <img src={baby}></img>
              </div>
            </div>
            <div className="text-center text-wrap p-2 mx-16 font-bold leading-none">
              I’m currently the size of an Apple{" "}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-1">
              <div>
                <img
                  src={lengthen}
                  className="bg-zinc-200 p-2 mr-3 rounded-full"
                ></img>
              </div>
              <div>
                <div className="leading-none">Height</div>
                <div className="font-semibold">10.1 cm</div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div>
                <img
                  src={scale}
                  className="bg-zinc-200 p-2 rounded-full mr-3"
                ></img>
              </div>
              <div>
                <div className="leading-none">Weight</div>
                <div className="font-semibold">200 gm</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-4">
            <div className="cursor-pointer bg-blue-500 text-white px-20 py-1 rounded-full shadow-md">
              <div className="flex items-center">
                <p>See More</p>
                <div className="pt-1 text-2xl">
                <MdOutlineKeyboardArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <MedicineReminderCard />
        <SmartCareGrid />
        <PregnancyExpertsCarousel />
        <div className="p-4 mt-2 border-t-4 border-gray-200">
          <img src={MethiSeedOil} alt="" className="w-full" />
        </div>
        <ImageSlider />
        <HealthTips />
        <HealthProductCard />
        {/* <Order /> */}
      </div>
    </div>
  );
}

export default PregnancyCare;
