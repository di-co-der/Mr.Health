// SlotTiming.jsx
import React from "react";

function SlotTiming({ currentSlots }) {
  const slotTimes = [
    "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM", "12:00 PM",
    "01:00 PM", "01:15 PM", "01:30 PM", "01:45 PM", "02:00 PM",
    "02:15 PM", "02:30 PM", "03:00 PM", "06:00 PM", "06:15 PM",
    "06:30 PM", "06:45 PM", "07:00 PM"
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {slotTimes.slice(0, currentSlots).map((time, index) => (
        <button
          key={index}
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          {time}
        </button>
      ))}
    </div>
  );
}

export default SlotTiming;
