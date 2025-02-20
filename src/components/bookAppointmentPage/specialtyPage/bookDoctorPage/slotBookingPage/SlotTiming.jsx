// SlotTiming.jsx
import React, { useState } from "react";

function SlotTiming({ currentSlots }) {

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const slotTimes = [
    "11:00 AM", "11:10 AM", "11:20 AM", "11:30 AM", "11:40 AM","11:50 AM", 
    "12:00 PM", "12:10 PM", "12:20 PM", "12:30 PM", "12:40 PM", "12:50 PM",
    "01:00 PM", "01:10 PM", "01:20 PM", "01:30 PM", "01:40 PM", "01:50 PM",
    "02:00 PM", "02:10 PM", "02:20 PM", "02:30 PM", "02:40 PM", "02:50 PM",
    "03:00 PM", "03:10 PM", "03:20 PM", "03:30 PM", "03:40 PM", "03:50 PM",
    "04:00 PM", "04:10 PM", "04:20 PM", "04:30 PM", "04:40 PM", "04:50 PM",
    "05:00 PM", "05:10 PM", "05:20 PM", "05:30 PM", "05:40 PM", "05:50 PM",
    "06:00 PM", "06:10 PM", "06:20 PM", "06:30 PM", "06:40 PM", "06:50 PM",
    "07:00 PM", "07:10 PM", "07:20 PM", "07:30 PM", "07:40 PM", "07:50 PM",
    "08:00 PM", "08:10 PM", "08:20 PM", "08:30 PM", "08:40 PM", "08:50 PM",
    "09:00 PM", "09:10 PM", "09:20 PM", "09:30 PM", "09:40 PM", "09:50 PM",
  ];

  const handleSlotClick = (currentSlots, time) => {
    setSelectedSlot( selectedSlot );
    setSelectedTime(time);
  };

  return (
    <div className="flex flex-wrap gap-4 p-4 m-2 mb-16 ">
      {slotTimes.slice(0, currentSlots).map((time, index) => (
        <button
          key={index}
          className={`py-2 px-4 rounded-lg border-[1px]  cursor-pointer ${
            selectedTime === time ? "bg-[#E6FAFA] border-[#00CCCC]" : "border-gray-400"
          }`}
          onClick={() => handleSlotClick(currentSlots, time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
}

export default SlotTiming;
