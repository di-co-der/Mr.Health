import React from 'react'
import image from '../src/assets/doctor_image_url.png'
import bookappointment_doctorinfo_map from '../src/assets/bookappointment_doctorinfo_map.jpg'


function BookYourAppointment3Page() {
  return (
    <div className="select-none min-h-screen bg-gray-100 flex items-cen justify-center">
    <div className="max-w-sm w-full bg-white  rounded-lg overflow-hidden relative p-3">
      {/* heading  */}

      <div className='header text-[18px] font-[lato] text-center m-2 mb-4'>Doctor name</div>

      {/* doctor info card  */}

      <div className='flex justify-between items-center bg-red-400 mb-5'>
        <div className='bg-yellow-300 max-w-[60%]'>
          <div className='text-[18px] font-[lato] -red-300'>Doctor Name</div>
          <div className='text-[14px] font-[lato] text-[#525252] mb-5'>Doctor Profession</div>
          <div className='text-[14px] font-[lato] text-[#525252]'>Doctor Education DocDoctor EducationDoctor EducationDoctor Education</div>
        </div>
        <div>
          <img src={image} alt="doctor_image" className=' w-[115px]' />
        </div>
      </div>

      {/* info cards */}


      <div className='flex justify-center items-center flex-wrap gap-[10px] border-b-[1px] pb-4 mb-4'>
          <div className='text-center border-[1px] border-[#00CCCC] pl-2 pr-2'>
              <div className='bg-red-200 mb-1 text-[#0086FF] text-[14px] font-[lato] font-semibold'>Numbers+</div>
              <div className='bg-yellow-300 text-[12px] font-[lato] font-semibold text-[#525252]'>Patients</div>
          </div>
          <div className='text-center border-[1px] border-[#00CCCC] pl-2 pr-2'>
              <div className='bg-red-200 mb-1 text-[#0086FF] text-[14px] font-[lato] font-semibold'>Years+</div>
              <div className='bg-yellow-300 text-[12px] font-[lato] font-semibold text-[#525252]'>Experience</div>
          </div>
          <div className='text-center border-[1px] border-[#00CCCC] pl-2 pr-2'>
              <div className='bg-red-200 mb-1 text-[#0086FF] text-[14px] font-[lato] font-semibold'>Distance+</div>
              <div className='bg-yellow-300 text-[12px] font-[lato] font-semibold text-[#525252]'>Location</div>
          </div>
          <div className='text-center border-[1px] border-[#00CCCC] pl-2 pr-2'>
              <div className='bg-red-200 mb-1 text-[#0086FF] text-[14px] font-[lato] font-semibold'>fees+</div>
              <div className='bg-yellow-300 text-[12px] font-[lato] font-semibold text-[#525252]'>Fees</div>
          </div>
      </div>

      {/* locaton */}

      <div className='border-b-[1px] pb-4 mb-4'>
        <div className='flex justify-center items-center gap-3'>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="#00CCCC"/>
          </svg>

          <div className=' text-[14px] font-[lato] text-[#525252] leading-none'> current location current location current location current location current location 
          </div>
        </div>
        <div>
          <img src={bookappointment_doctorinfo_map} alt="" className='m-auto pt-4' />
        </div>
      </div>

      {/* patient stories */}

    <div className='border-b-[1px] pb-4 mb-4'>
      <div className='font-semibold text-[#0086FF] font-[inter] '>Patient Stories</div>
      <div className='text-[10px] font-[lato] text-[#525252] leading-none'>These stories represent patient opinions and experiences. They do not reflect the doctor’s medical capabilities.</div>
    </div>

      {/* recommendation */}
    
    <div className='flex justify-center items-center border-b-[1px] pb-4 mb-4'>
      <div className='flex justify-center items-center border-r-[1px]'>
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3333 9C23.3333 8.46957 23.1098 7.96086 22.712 7.58579C22.3142 7.21071 21.7747 7 21.2121 7H14.5091L15.5273 2.43C15.5485 2.33 15.5591 2.22 15.5591 2.11C15.5591 1.7 15.3788 1.32 15.0924 1.05L13.9682 0L6.98939 6.58C6.59697 6.95 6.36364 7.45 6.36364 8V18C6.36364 18.5304 6.58712 19.0391 6.98493 19.4142C7.38273 19.7893 7.92227 20 8.48485 20H18.0303C18.9106 20 19.6636 19.5 19.9818 18.78L23.1849 11.73C23.2803 11.5 23.3333 11.26 23.3333 11V9ZM0 20H4.24242V8H0V20Z" fill="#25D366"/>
        </svg>
        <div className='m-3 font-[inter] font-semibold text-[18px] bg-red-400'>92%</div>
      </div>

      <div className='text-[12px] font-[lato] text-[#525252] m-4 text-wrap bg-yellow-200'>Out of 2500 patients surveyed, 92 % of them recommend visiting this hospital</div>
    </div>

    {/* stories  */}

    <div className='flex items-center gap-2'>
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.4 0H1.6C0.72 0 0 0.675 0 1.5V10.5C0 11.325 0.72 12 1.6 12H12.8L16 15V1.5C16 0.675 15.28 0 14.4 0ZM12 9.75H4C3.56 9.75 3.2 9.4125 3.2 9C3.2 8.5875 3.56 8.25 4 8.25H12C12.44 8.25 12.8 8.5875 12.8 9C12.8 9.4125 12.44 9.75 12 9.75ZM12 6.75H4C3.56 6.75 3.2 6.4125 3.2 6C3.2 5.5875 3.56 5.25 4 5.25H12C12.44 5.25 12.8 5.5875 12.8 6C12.8 6.4125 12.44 6.75 12 6.75ZM12 3.75H4C3.56 3.75 3.2 3.4125 3.2 3C3.2 2.5875 3.56 2.25 4 2.25H12C12.44 2.25 12.8 2.5875 12.8 3C12.8 3.4125 12.44 3.75 12 3.75Z" fill="#00CCCC"/>
    </svg>
    <div>STORIES</div>
    </div>

    


      </div>
    </div>
  )
}

export default BookYourAppointment3Page