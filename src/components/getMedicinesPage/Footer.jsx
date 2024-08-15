import React from "react";

//assets
import sideArrow from "../../assets/svgs/Side-arrow.svg";
import phone from "../../assets/svgs/phone.svg";
import userguide from "../../assets/svgs/userGuide.svg";
import legs from "../../assets/svgs/getMedicines/legs.svg";
import back from "../../assets/svgs/getMedicines/back.svg";
import waist from "../../assets/svgs/getMedicines/waist.svg";
import wrist from "../../assets/svgs/getMedicines/wrist.svg";
import neck from "../../assets/svgs/getMedicines/Neck.svg";
import others from "../../assets/svgs/getMedicines/others.svg";

function Footer() {
  return (
    <div>
      <div className=" flex flex-wrap justify-center p-4 gap-4 ">
        <img src={legs} className="cursor-pointer hover:shadow-lg hover:scale-95"></img>
        <img src={back} className="cursor-pointer hover:shadow-lg hover:scale-95"></img>
        <img src={waist} className="cursor-pointer hover:shadow-lg hover:scale-95"></img>
        <img src={wrist} className="cursor-pointer hover:shadow-lg hover:scale-95"></img>
        <img src={neck} className="cursor-pointer hover:shadow-lg hover:scale-95"></img>
        <img src={others} className="cursor-pointer hover:shadow-lg hover:scale-95"></img>
      </div>

      <div className="border-b-4 pb-4 mb-4">
        <div className=" font-bold p-2 mb-4 text-[#0086FF]">
          Still need help ?
        </div>

        <div className="flex gap-4 items-center p-2 border-[2px] border-[#0086FF] cursor-pointer transition-all group hover:shadow-md m-2">
          <img src={phone} className="h-8"></img>
          <div className=" text-[#525252]">Call us & Place your order</div>
          <div className="group-hover:-translate-x-2 group-hover:scale-105 ml-20">
            <img src={sideArrow}></img>
          </div>
        </div>

        <div className="flex gap-4 items-center p-2 border-[2px] border-[#0086FF] cursor-pointer transition-all group hover:shadow-md m-2">
          <img src={userguide} className="h-8"></img>
          <div className=" text-[#525252]">Quick guide to order on Medico</div>
          <div className="group-hover:-translate-x-2 group-hover:scale-105 ml-10">
            <img src={sideArrow}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
