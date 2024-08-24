import React from 'react'

//components
import BookYourAppointmentsList from './bookYourAppointments/BookYourAppointmentsList'

//assets
import BookYourAppointmentsHeadingSVG from "../../assets/svgs/BookYourAppointmentsHeadingSVG.svg";

function BookYourAppointments() {
  return (
    <div>

        {/* Heading */}
        <div className=""></div>
      <div className=" flex justify-center items-start pt-6 gap-3 px-4 pb-5">
        <img
          src={BookYourAppointmentsHeadingSVG}
          alt="cal" className=""/>
        <div className="">
          <div className="font-bold text-2xl leading-none pb-1.5 pt-[3px]">
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
      <div className="px-24 rounded-md bg-[#ccf5f5] cursor-pointer hover:outline outline-1 transition-all py-3">
        <p className="text-md">View All Specialists</p>
      </div>
    </div>
    </div>
  )
}

export default BookYourAppointments