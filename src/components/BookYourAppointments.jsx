import React from 'react'
import BookYourAppointmentsHeadingSVG from "../assets/BookYourAppointmentsHeadingSVG.svg";
import BookYourAppointmentsList from './BookYourAppointmentsList'

function BookYourAppointments() {
  return (
    <div>

        {/* Heading */}
        <div className="pt-10"></div>
      <div className=" flex justify-center items-start pt-6 gap-3 px-2 pb-3 border-t-4 border-gray-200">
        <img
          src={BookYourAppointmentsHeadingSVG}
          alt="cal" className=""/>
        <div className="">
          <div className=" font-bold text-2xl leading-none pb-3 pt-[3px]">
            Book your Appointments
          </div>

          <div className=" ">
            Schedule your appointments with top specialists in your city
          </div>
        </div>
      </div>


    {/* cards */}
    <BookYourAppointmentsList />

    {/* button */}
    <div className="flex justify-center border-b-4 py-[20px]">
      <div className="px-24 rounded-md bg-[#D9D9D9] cursor-pointer hover:outline outline-1 transition-all py-3">
        <p className="font-[Lato] text-md">View All Specialists</p>
      </div>
    </div>

    {/* footer */}

    


    </div>
  )
}

export default BookYourAppointments