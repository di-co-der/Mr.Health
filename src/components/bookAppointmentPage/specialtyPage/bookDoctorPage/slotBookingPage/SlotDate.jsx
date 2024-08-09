import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//components
import SlotCard from "./SlotCard";
import SlotTiming from "./SlotTiming";

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
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "0%",
      },
    },
  ],
};

function SlotDate() {
  const [currentDate, setCurrentDate] = useState(slotData[0].date);
  const [currentSlots, setCurrentSlots] = useState(slotData[0].slots);

  const handleDateClick = (date, slots) => {
    setCurrentDate(date);
    setCurrentSlots(slots);
  };

  return (
    <div>
      <div className="">
        <Slider {...settings} className="">
          {slotData.map((slot, index) => (
            <SlotCard
              key={index}
              date={slot.date}
              slots={slot.slots}
              onClick={handleDateClick}
            />
          ))}
        </Slider>
      </div>

      <div className="text-center m-5 font-bold">{currentDate}</div>
      <SlotTiming currentSlots= {currentSlots}/>
    </div>
  );
}

export default SlotDate;

