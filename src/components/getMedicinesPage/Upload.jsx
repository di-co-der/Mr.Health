import React from 'react';

//assets
import Getmedicines_Prescription from '../../assets/Getmedicine_Prescription.jpg';
import Attachment from '../../assets/GetMedicine_Attachment.png';

function Upload({ selectedCategory, setSelectedCategory }) {

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-6 border-y-2">
      <div className='flex justify-between rounded-full border-2 p-[1px] py-[2px] border-[#0086FF] bg-[#D9D9D9] shadow-inner shadow-gray-400'>
        <button
          onClick={() => handleClick('Medicines')}
          className={`py-1 px-9 rounded-full ${
            selectedCategory === 'Medicines' ? 'bg-[#0086FF] text-white' : 'bg-[#D9D9D9] text-[#0086FF]'
          }`}
        >
          Medicines
        </button>
        <button
          onClick={() => handleClick('Health Products')}
          className={`py-1 px-9 rounded-full ${
            selectedCategory === 'Health Products' ? 'bg-[#0086FF] text-white' : 'bg-[#D9D9D9] text-[#0086FF]'
          }`}
        >
          Health Products
        </button>
      </div>

      <div className='flex justify-center items-center gap-2 mt-6'>
        <img src={Getmedicines_Prescription} alt='presc. img' />
        <div>
          <div className='font-bold'>Quickly order via prescription</div>
          <div className='text-sm'>Upload your photo of your prescription and we will deliver the medicines</div>
        </div>
      </div>
      <button className='bg-[#0086FF] text-white font-medium px-4 py-2 rounded-xl mt-5 ml-14 flex justify-center items-center gap-2'>
        <img src={Attachment} alt='attachment icon' />
        Upload Prescription
      </button>
    </div>
  );
}

export default Upload;
