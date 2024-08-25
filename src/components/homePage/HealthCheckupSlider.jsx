import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HealthCheckupImage1 from "../../assets/HealthCheckupImage1.png";
import HealthCheckupImage2 from "../../assets/HealthCheckupImage2.png";
import HealthCheckupHeadingSVG from "../../assets/svgs/HealthCheckupHeadingSVG.svg";
import SexualHealthTest from "../../assets/SexualHealthTest.jpg"
import BoneAndJointTest from "../../assets/BoneAndJointTest.jpg"
import DiabetesTest from "../../assets/DiabetesTest.jpg"
import RTPCRtest from "../../assets/RTPCR test.jpg"
import TestForSkinIssue from "../../assets/TestForSkinIssue.jpg"
import EyeTest from "../../assets/EyeTest.avif"

const images = [
  {
    src: TestForSkinIssue,
    title: "Tests for skin issues",
    price: "Starting from ₹160",
  },
  {
    src: EyeTest,
    title: "Eyesight Checkup",
    price: "Starting from ₹150",
  },
  {
    src: RTPCRtest,
    title: "RTPCR Test",
    price: "Starting from ₹200",
  },
  {
    src: DiabetesTest,
    title: "Diabetes Tests",
    price: "Starting from ₹150",
  },
  {
    src: BoneAndJointTest,
    title: "Tests for Bone & Joints",
    price: "Starting from ₹147",
  },
  {
    src: SexualHealthTest,
    title: "Sexual Wellness Tests",
    price: "Starting from ₹100",
  },
];

const HealthCheckupSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    centerPadding: "0%",
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
          slidesToShow: 2.4,
          centerMode: true,
          centerPadding: "0%",
        },
      },
      {
        // breakpoint: 480, // breakpoint for very small devices
        // settings: {
        //   slidesToShow: 3,
        //   centerMode: false,
        // },
      },
    ],
  };

  return (
    <div className="w-full pb-12">
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
      <div className="flex items-start gap-5 pl-4 pr-4 tracking-tight pt-6">
        <div className="w-20 h-20">
          <img
            src={HealthCheckupHeadingSVG}
            alt="Health Checkup Img"
            className="w-20"
          />
        </div>

        <div className="">
          <h2 className="text-2xl mb-2 font-bold text-[#292929] leading-none">
            Get your Health in check
          </h2>
          <p className="leading-5 text-[#525252]">
            Book your screenings from most common health and body checkups
          </p>
        </div>
      </div>

      <div className="">
        <div className="flex justify-end pr-4">
          <a href="#" className="text-[#00CCCC] text-lg font-semibold mb-3">
            See All
          </a>
        </div>
        <Slider {...settings} className="pb-5">
          {images.map((image, index) => (
            <div key={index} className="pl-[104px] outline-none">
              <div className="relative bg-white pb-12 rounded-t-xl w-36 h-full flex flex-col items-center">
                <img
                  src={image.src}
                  alt={`Image ${index}`}
                  className="w-full h-28 object-cover rounded-t-xl"
                  style={{ width: "150px" }}
                />
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-75 rounded-b-xl">
                  <h3 className="w-full pt-1 text-[15px] text-center font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
                    {image.title}
                  </h3>
                  <p className="w-full text-sm text-center font-normal italic text-[#25D366]">
                    {image.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HealthCheckupSlider;
