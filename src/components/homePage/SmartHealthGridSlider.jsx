import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// assets
import DiabetesCare from "../../assets/svgs/DiabetesCare.svg";
import PregnancyCare from "../../assets/svgs/PregnancyCare.svg";
import BabyCare from "../../assets/svgs/BabyCare.svg";
import WeightLoss from "../../assets/WeightLoss.webp";
import MuscleGain from "../../assets/MuscleGain.webp";
import DentalCare from "../../assets/DentalCare.webp";
import FungalInfection from "../../assets/FungalInfection.webp";
import BeautyCare from "../../assets/beautyCare.webp";
import SkinCare from "../../assets/Korean-skincare.webp";

const SmartHealthSlides = [
  [
    {
      name: "Diabetes Care",
      icon: DiabetesCare,
      route: "/Diabetes-Care",
    },
    {
      name: "Pregnancy Care",
      icon: PregnancyCare,
      route: "/Pregnancy-Care",
    },
    {
      name: "Baby Care",
      icon: BabyCare,
      route: "/Baby-Care",
    },
  ],
  [
    {
      name: "Weight Loss",
      icon: WeightLoss,
      route: "/Weight-Loss",
    },
    {
      name: "Muscle Gain",
      icon: MuscleGain,
      route: "/Muscle-Gain",
    },
    {
      name: "Dental Care",
      icon: DentalCare,
      route: "/Dental-Care",
    },
  ],
  [
    {
      name: "Fungal Infection",
      icon: FungalInfection,
      route: "/Fungal-Infection",
    },
    {
      name: "Beauty Care",
      icon: BeautyCare,
      route: "/Beauty-Care",
    },
    {
      name: "Skin Care",
      icon: SkinCare,
      route: "/Skin-Care",
    },
  ],
];

function SmartHealthGridSlider() {
  const navigate = useNavigate();

  const handleServiceClick = (route) => {
    navigate(route);
  };

  const settings = {
    infinite: true,
    slidesToShow: 1, // Show 1 card with 3 images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    centerMode: false,
    customPaging: (i) => <div className="custom-dot"></div>,
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768, // breakpoint for mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on mobile
          centerMode: true,
          centerPadding: "0%",
        },
      },
      {
        breakpoint: 480, // breakpoint for very small devices
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on very small devices
          centerMode: true,
          centerPadding: "0%",
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <style>{`
        .custom-dots {
          display: flex !important;
          justify-content: center;
          align-items: center;
          margin-top: 10px ;
        }

        .custom-dots li {
          width: 9px;
          height: 9px;
          margin: 0 5px;
          border-radius: 50%;
          background-color: #d1d1d1;
        }

        .custom-dots li.slick-active {
          width: 11px;
          height: 11px;
          background-color: #00cccc;
        }
      `}</style>

      <div className="border-b-4 pt-4 pb-12">
        <Slider {...settings}>
          {SmartHealthSlides.map((slide, index) => (
            <div
              key={index}
              className="flex justify-center items-center"
            >
              <div className="mx-3 py-4 pb-4 my-2 rounded-lg shadow-md bg-red-300 border-2">
                <h3 className="font-semibold text-[#0086FF] text-base mb-2 text-center">
                  For Your Smart Health
                </h3>
                <div className="flex">
                  {slide.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center border-2 border-[#00CCCC] rounded-lg rounded-t-xl cursor-pointer transition-all duration-100 hover:border-[#00CCCC] hover:shadow-md mx-2"
                      onClick={() => handleServiceClick(item.route)}
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-32 h-20 object-cover rounded-t-xl"
                      />
                      <span className="text-center text-sm font-semibold tracking-tight leading-4 py-2">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SmartHealthGridSlider;
