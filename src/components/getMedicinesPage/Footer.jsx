import React from 'react'

//assets
import sideArrow from "../../assets/svgs/Side-arrow.svg";
import phone from "../../assets/svgs/phone.svg"
import userguide from "../../assets/svgs/userGuide.svg"

function Footer() {
  return (
    <div className='border-b-4 pb-4 mb-4'>
    <div className=" font-bold p-2 mb-4 text-[#0086FF]">Still need help ?</div>

    <div className="flex gap-4 items-center p-2 border-[2px] border-[#0086FF] cursor-pointer transition-all group hover:shadow-md m-2">
    <img src={phone} className='h-8'></img>
      <div className=" text-[#525252]">
        Call us & Place your order
      </div>
      <div className="group-hover:-translate-x-2 group-hover:scale-105 ml-20">
        <img src={sideArrow}></img>
      </div>
    </div>

    <div className="flex gap-4 items-center p-2 border-[2px] border-[#0086FF] cursor-pointer transition-all group hover:shadow-md m-2">
    <img src={userguide} className='h-8'></img>
      <div className=" text-[#525252]">
      Quick guide to order on Medico
      </div>
      <div className="group-hover:-translate-x-2 group-hover:scale-105 ml-10">
        <img src={sideArrow}></img>
      </div>
    </div>
    </div>
  )
}

export default Footer

