import React from 'react'
import { BiSolidUserCircle } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";


function Navbar() {
  return (
    <div className='w-full px-[2vw] py-[2vw] flex justify-between items-center'>
        <BiSolidUserCircle className='size-[7vw] bg-zinc-500 rounded-full fill-[#F4F4F5]'/>
        <div className="location flex gap-[1vw] items-center">
            <FaMapMarkerAlt className='fill-[rgb(10,47,132)]'/>
            <div className='location font-bold leading-none text-[3vw]'>Mumbai
            </div>
            <FaAngleDown className='fill-black' />
        </div>
        <IoNotificationsOutline className='size-[5vw]'/>




    </div>
  )
}

export default Navbar