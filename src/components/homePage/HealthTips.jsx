import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//assets
import BookYourAppointmentsHeadingSVG from "../../assets/svgs/BookYourAppointmentsHeadingSVG.svg";
import smartHealth from "../../assets/svgs/smartHealth.svg";

const images = [
  {
    src: smartHealth,
  },
  {
    src: smartHealth,
  },
  {
    src: smartHealth,
  },
  {
    src: smartHealth,
  },
  {
    src: smartHealth,
  },
  {
    src: smartHealth,
  },
  {
    src: smartHealth,
  },
];

function HealthTips() {
  const settings = {
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
            src={BookYourAppointmentsHeadingSVG}
            alt="Health Checkup Img"
            className="w-20"
          />
        </div>

        <div className="">
          <h2 className="text-2xl mb-2 font-bold text-[#292929] leading-none text-center">
          Health Tips For Your Smart Health
          </h2>
        </div>
      </div>

      <div className="">
        <Slider {...settings} className="pb-5">
          {images.map((image, index) => (
            <div key={index} className="outline-none">
              <div className=" w-full flex flex-col items-center">
                <img
                  src={image.src}
                  alt={`Image ${index}`}
                  className="w-full h-40"
                  style={{ width: "150px" }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HealthTips;
