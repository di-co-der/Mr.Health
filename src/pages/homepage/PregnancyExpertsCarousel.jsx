import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import doctor1 from "../../assets/doctor1.png";
import doctor_image_url from "../../assets/doctor_image_url.png";
import doctor_image2_url from "../../assets/doctor_image2_url.png";

import Star from "../../assets/svgs/Star.svg";
import PatientCare from "../../assets/svgs/PatientCare.svg";

const doctors = [
  {
    id: 1,
    name: "Dr. Renu Sachdeva",
    specialty: "Gynecology",
    rating: 4.7,
    patients: 1421,
    experience: "24 Years",
    fees: "₹700",
    location: "1.2 Km",
    nextSlot: "10 Sept",
    image: doctor_image_url,
  },
  {
    id: 2,
    name: "Dr. Anil Kumar",
    specialty: "Cardiology",
    rating: 4.9,
    patients: 1803,
    experience: "15 Years",
    fees: "₹900",
    location: "2 Km",
    nextSlot: "12 Sept",
    image: doctor1,
  },
  {
    id: 3,
    name: "Dr. Priya Mehta",
    specialty: "Dermatology",
    rating: 4.6,
    patients: 1302,
    experience: "18 Years",
    fees: "₹600",
    location: "500 m",
    nextSlot: "15 Sept",
    image: doctor_image_url,
  },
  {
    id: 4,
    name: "Dr. Rakesh Sharma",
    specialty: "Orthopedics",
    rating: 4.8,
    patients: 1550,
    experience: "20 Years",
    fees: "₹800",
    location: "3 Km",
    nextSlot: "18 Sept",
    image: doctor_image2_url,
  },
  {
    id: 5,
    name: "Dr. Neha Gupta",
    specialty: "Pediatrics",
    rating: 4.9,
    patients: 1675,
    experience: "12 Years",
    fees: "₹750",
    location: "1 Km",
    nextSlot: "20 Sept",
    image: doctor_image_url,
  },
  {
    id: 6,
    name: "Dr. Vijay Patel",
    specialty: "Neurology",
    rating: 4.7,
    patients: 1400,
    experience: "22 Years",
    fees: "₹1000",
    location: "2.5 Km",
    nextSlot: "22 Sept",
    image: doctor1,
  },
];

const DoctorCard = ({ doctor }) => {
  return (
    <div className="">
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
      <div
        className="p-4 border rounded-lg mb-4 shadow-md cursor-pointer bg-white hover:bg-slate-50 hover:outline outline-2 outline-gray-200"
        // onClick={onClick}
      >
        <div className="flex items-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-20 h-20 rounded-full"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{doctor.name}</h3>
            <p className="text-sm text-[#0086ff]">{doctor.specialty}</p>
            <div className="flex items-center mt-2">
              <span className="text-green-500">
                <img src={Star} alt="" />
              </span>
              <span className="ml-1 italic text-gray-700">{doctor.rating}</span>
              <span className="ml-3 mt-1 text-green-500">
                <img src={PatientCare} alt="" />
              </span>
              <span className="italic ml-1 text-gray-700">
                {doctor.patients} Patient Stories
              </span>
            </div>
          </div>
        </div>

        <div className="flex pt-2 mt-2 justify-around border-t-2 border-zinc-300">
          <div className="text-center">
            <p className="text-[#0086ff] font-medium">{doctor.experience}</p>
            <p className="text-sm text-gray-500">Experience</p>
          </div>
          <div className="text-center">
            <p className="text-[#0086ff] font-medium">{doctor.fees}</p>
            <p className="text-sm text-gray-500">Fees</p>
          </div>
          <div className="text-center">
            <p className="text-[#0086ff] font-medium">{doctor.location}</p>
            <p className="text-sm text-gray-500">Location</p>
          </div>
          <div className="text-center">
            <p className="text-[#0086ff] font-medium">{doctor.nextSlot}</p>
            <p className="text-sm text-gray-500">Next Slot</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PregnancyExpertsCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1, // Show 1 card with 3 images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Autoplay every 2 seconds (2000 milliseconds)
    dots: true,
    centerMode: false,
    fade: false, // Disable fade for smoother transitions
    pauseOnHover: false, // Keeps autoplay going even when hovering over the slider
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
    <div className="p-2 pb-8">
      <div className="flex justify-between items-center mb-4 px-2 pt-3">
        <h2 className="text-xl font-semibold text-[#0086ff]">
          Meets Our Experts
        </h2>
        <a href="#" className="text-[#0086ff] font-semibold">
          View All
        </a>
      </div>

      <Slider {...settings}>
        {doctors.map((doctor) => (
          <div key={doctor.id} className="px-2">
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PregnancyExpertsCarousel;
