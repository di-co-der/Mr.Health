import React from "react";

const SlotCard = ({ date, slots, onClick }) => {
  return (
    <div
      className={`w-28 border-[1px] rounded-md  px-3 py-1 cursor-pointer ${
        slots > 0
          ? "hover:bg-[#E6FAFA] hover:border-[#00CCCC] border-gray-400"
          : "bg-gray-100  border-gray-100"
      }`}
      onClick={onClick}
    >
      <div className="font-medium text-black text-[12px] text-center">
        {date}
      </div>
      <div
        className={`font-normal text-[11px] text-center ${
          slots > 0 ? "text-[#25D366]" : "text-gray-400"
        }`}
      >
        {slots > 0 ? `${slots} slots available` : "No slots available"}
      </div>
    </div>
  );
};

export default SlotCard;
