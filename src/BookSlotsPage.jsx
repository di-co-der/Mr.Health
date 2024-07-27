import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./components/Header";
import image from "./assets/doctor_image_url.png";
import Slider from "react-slick";
import SlotCard from "./components/SlotCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//for slot-slide

//format the date
const getFormattedDate = (date) => {
  const options = { weekday: "short", day: "2-digit", month: "short" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const [weekday, monthDay] = formattedDate.split(", ");
  const [month, day] = monthDay.split(" ");
  return `${weekday}, ${day} ${month}`;
};

//Generate the slot date
const getDates = () => {
  const day0 = new Date();
  const day1 = new Date(day0);
  day1.setDate(day1.getDate() + 1);
  const day2 = new Date(day0);
  day2.setDate(day2.getDate() + 2);
  const day3 = new Date(day0);
  day3.setDate(day3.getDate() + 3);
  const day4 = new Date(day0);
  day4.setDate(day4.getDate() + 4);
  const day5 = new Date(day0);
  day5.setDate(day5.getDate() + 5);
  const day6 = new Date(day0);
  day6.setDate(day6.getDate() + 6);

  return [
    { date: "Today", slots: 18 },
    { date: "Tomorrow", slots: 0 },
    { date: getFormattedDate(day2), slots: 6 },
    { date: getFormattedDate(day3), slots: 0 },
    { date: getFormattedDate(day4), slots: 18 },
    { date: getFormattedDate(day5), slots: 19 },
    { date: getFormattedDate(day6), slots: 12 },
    // add more slot data if needed
  ];
};

const slotData = getDates();

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 768, // breakpoint for mobile devices
      settings: {
        slidesToShow: 2.7,
        centerMode: true,
        centerPadding: "0%",
      },
    },
  ],
};

function BookSlotsPage() {
  const { specialty, doctorName, doctorId } = useParams();
  const [currentDate, setCurrentDate] = useState("Today");

  const handleDateClick = (date) => {
    setCurrentDate(date);
  };

  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  const handleBookingClick = () => {
    navigate(
      `/book-appointment/${specialty}/${doctorName
    }/${doctorId}/slot/booking`
    );
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex justify-center">
        <div className="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
          <Header title="Slot Booking" onClick={handleAppointmentClick} />

          {/* doctorcard  */}
          <div className="flex justify-center items-center p-2 gap-28 border-b-[1px]">
            <div className="flex justify-center items-center gap-3">
              <img
                src={image}
                alt="doctor image"
                className="rounded-full h-[60px] w-[60px]"
              />
              <div>
                <div className="text-[18px] font-medium">{doctorName}</div>
                <div className="text-[14px] text-[#525252]">{specialty}</div>
              </div>
            </div>
            <div>
              <div className="p-2">
                <svg
                  width="18"
                  height="24"
                  viewBox="0 0 18 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00005 11.4189C8.22948 11.4189 7.49046 11.1128 6.94558 10.5679C6.4007 10.023 6.09459 9.28403 6.09459 8.51345C6.09459 7.74287 6.4007 7.00385 6.94558 6.45897C7.49046 5.91409 8.22948 5.60798 9.00005 5.60798C9.77063 5.60798 10.5096 5.91409 11.0545 6.45897C11.5994 7.00385 11.9055 7.74287 11.9055 8.51345C11.9055 8.895 11.8304 9.27282 11.6844 9.62532C11.5383 9.97783 11.3243 10.2981 11.0545 10.5679C10.7847 10.8377 10.4644 11.0517 10.1119 11.1978C9.75942 11.3438 9.3816 11.4189 9.00005 11.4189ZM9.00005 0.378143C6.84243 0.378143 4.77319 1.23525 3.24752 2.76092C1.72186 4.28658 0.864746 6.35583 0.864746 8.51345C0.864746 14.6149 9.00005 23.6219 9.00005 23.6219C9.00005 23.6219 17.1354 14.6149 17.1354 8.51345C17.1354 6.35583 16.2782 4.28658 14.7526 2.76092C13.2269 1.23525 11.1577 0.378143 9.00005 0.378143Z"
                    fill="#0086FF"
                  />
                </svg>
              </div>
              <div className="text-[#0086FF] font-semibold text-[12px] text-center">
                589m
              </div>
            </div>
          </div>

          {/* choose your slot  */}
          <div className="m-4 text-[#0086FF] font-semibold">
            Choose your Slot
          </div>

          {/* slotcard */}
          <div>
            <Slider {...settings}>
              {slotData.map((slot, index) => (
                <SlotCard
                  key={index}
                  date={slot.date}
                  slots={slot.slots}
                  onClick={() => handleDateClick(slot.date)}
                />
              ))}
            </Slider>
          </div>

          <div className="text-center m-5 font-bold">{currentDate}</div>

          {/* slot timing  */}
          <div>
            <div></div>
            <div></div>
          </div>

          {/* button  */}
          <div className="p-3 pb-0 fixed max-w-sm bottom-0 left-1/2 transform -translate-x-1/2 w-full">
            <div
              className="bg-[#0086FF] rounded-md text-center p-3 text-white font-bold cursor-pointer"
              onClick={handleBookingClick}
            >
              Confirm Booking
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSlotsPage;
