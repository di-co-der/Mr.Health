// SlotCard.js
import React from 'react';

const SlotCard = ({ date, slots, onClick }) => {
  return (
    <div
      className={`inline-block border-[1px] rounded-md  px-4 cursor-pointer ${
        slots > 0 ? 'hover:bg-[#E6FAFA] hover:border-[#00CCCC]' : 'bg-gray-200 border-gray-400'
      }`}
      onClick={onClick} // Add onClick handler
    >
      <div className='font-bold text-[12px] text-center'>{date}</div>
      <div
        className={`font-bold text-[11px] text-center ${
          slots > 0 ? 'text-[#25D366]'  : 'text-gray-500'
        }`}
      >
        {slots > 0 ? `${slots} slots available` : 'No slots available'}
      </div>
    </div>
  );
};

export default SlotCard;


