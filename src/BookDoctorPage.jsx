import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "./components/Header";
import mapSvg from "../src/assets/svgs/map.svg";
import userAvatar from "../src/assets/User_Avatar.jpg"
import starGroup from "../src/assets/Star Group.jpg"
import messageIcon from "../src/assets/svgs/messageIcon.svg"
import like from "../src/assets/svgs/Like.svg"
import sideArrow from "../src/assets/svgs/Side-arrow.svg"
import {userData} from "../src/data/userStories"
import { doctors } from "./data/doctors";
// import StarRating from "./components/StarRating";

const BookDoctorPage = () => {
  //Handle doctor.jsx from data
  const { doctorId } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(doctorId));

  if (!doctor) {
    return <div>Doctor not found!</div>;
  }

  //Handle UserStories
  // const { userId } = useParams();
  // const user = userData.find((u) => u.id === parseInt(userId));

  // if (!user) {
  //   return <div>User not found!</div>;
  // }

  //Handle MyAppointment
  const navigate = useNavigate();
  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  //Handle book your slot button
  const navigate1 = useNavigate();
  const handleBookYourSlotClick = (doctorId, doctorName, specialty) => {
    navigate1(`/book-appointment/${specialty}/${doctorName}/${doctorId}/slot`);
  };

  return (
    <div className="min-h-screen max-w-sm mx-auto bg-green-100 items-center">
      <Header title={doctor.name} onClick={handleAppointmentClick} />
      {/* <DoctorDetails doctor={doctor} /> */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* doctor info card  */}
        <div className="flex justify-between items-center mb-5 cursor-pointer p-2">
          <div className=" max-w-[60%]">
            <div className="text-[18px]">{doctor.name}</div>
            <div className="text-[14px] text-[#525252] mb-5">
              {doctor.specialty}
            </div>
            <div className="text-[14px] text-[#525252]">{doctor.education}</div>
          </div>
          <div>
            <img src={doctor.image} alt="doctor_image" className=" w-[115px]" />
          </div>
        </div>

        {/* info cards */}
        <div className="flex justify-center items-center flex-wrap gap-[10px] border-b-[1px] pb-4 mb-4">
          <div className="text-center border-[1px] border-[#00CCCC] pl-2 pr-2">
            <div className=" text-[#0086FF] text-[14px] font-semibold">
              {doctor.patients}
            </div>
            <div className=" text-[12px] font-semibold text-[#525252]">
              Patients
            </div>
          </div>
          <div className="text-center border-[1px] border-[#00CCCC] pl-2 pr-2">
            <div className=" text-[#0086FF] text-[14px] font-semibold">
              {doctor.experience}
            </div>
            <div className=" text-[12px] font-semibold text-[#525252]">
              Experience
            </div>
          </div>
          <div className="text-center border-[1px] border-[#00CCCC] pl-2 pr-2">
            <div className=" text-[#0086FF] text-[14px] font-semibold">
              {doctor.location}
            </div>
            <div className=" text-[12px] font-semibold text-[#525252]">
              Location
            </div>
          </div>
          <div className="text-center border-[1px] border-[#00CCCC] pl-2 pr-2">
            <div className=" text-[#0086FF] text-[14px] font-semibold">
              {doctor.fees}
            </div>
            <div className=" text-[12px] font-semibold text-[#525252]">
              Fees
            </div>
          </div>
        </div>

        {/* locaton */}
        <div className="border-b-[1px] pb-4 mb-4">
          <div className="flex justify-center items-center gap-3 p-2">
            <img src={mapSvg}></img>
            <div className=" text-[14px] text-[#525252] leading-none">
              {" "}
              {doctor.map}
            </div>
          </div>
          <div>
            <img
              src={doctor.mapImage.mapIMage}
              alt=""
              className="m-auto pt-4 cursor-pointer"
            />
          </div>
        </div>

        {/* patient stories */}
        <div className="border-b-[1px] p-2 pb-4 mb-4">
          <div className="font-semibold text-[#0086FF] ">Patient Stories</div>
          <div className="text-[10px] text-[#525252] leading-none">
            These stories represent patient opinions and experiences. They do
            not reflect the doctor’s medical capabilities.
          </div>
        </div>

        {/* recommendation */}
        <div className="flex justify-center items-center border-b-[1px] p-2 pb-4 mb-4">
          <div className="flex justify-center items-center border-r-[1px]">
            <img src={like}></img>
            <div className="m-3 font-semibold text-[18p">92%</div>
          </div>

          <div className="text-[12px] text-[#525252] m-4 text-wrap ">
            Out of 2500 patients surveyed, 92 % of them recommend visiting this
            hospital
          </div>
        </div>

        {/* stories heading */}
        <div className="flex items-center gap-2 p-2">
          <img src={messageIcon}></img>
          <div className="text-[12px] text-[#525252] font-semibold">
            STORIES
          </div>
        </div>

        {/* user story */}
        <div className="main-div border-b-[1px] mt-3 pb-3">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-center items-center gap-4">
              <div className="avatar"><img src={userAvatar} alt="" /></div>
              <div>
                <div className=" text-[12px] font-semibold cursor-pointer">
                  User Name 
                </div>
                <div className=" text-[12px] text-[#525252]">X days ago</div>
              </div>
            </div>
            {/* <StarRating /> */}
            <div className="rating"><img src={starGroup} alt="" /></div>
          </div>
          <div className={`text-[12px] font-semibold ml-14 p-1 `}>
            Visited for thyroid disorder treatment
          </div>

          <div className="flex justify-center items-center gap-10 p-3 border-b-2">
            <div className=" text-[12px] text-[#0086FF] cursor-pointer ">
              Read all stories (number)
            </div>
            <div className=" text-[12px] cursor-pointer">Share Your Story</div>
          </div>

          {/* more about doctor  */}
          <div className=" font-semibold p-2 mb-4">More about Doctor name</div>
          <div className="flex justify-between items-center p-2 border-b-[1px]">
            <div className="text-[14px] text-[#525252]">
              Specialization and Services
            </div>
            <div className="cursor-pointer">
              <img src={sideArrow}></img>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 border-b-[1px]">
            <div className="text-[14px] text-[#525252]">
              Awards and Recognitions
            </div>
            <div className="cursor-pointer">
            <img src={sideArrow}></img>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 border-b-[1px] mb-14">
            <div className="text-[14px] text-[#525252]">Experience</div>
            <div className="cursor-pointer">
            <img src={sideArrow}></img>
            </div>
          </div>
        </div>
        {/* button */}
        <div className=" p-3 pb-0 fixed max-w-sm bottom-0 left-1/2 transform -translate-x-1/2 w-full">
          <div
            className="bg-[#0086FF] rounded-md text-center p-3 text-white font-bold cursor-pointer"
            onClick={() =>
              handleBookYourSlotClick(doctor.id, doctor.name, doctor.specialty)
            }
          >
            {" "}
            Proceed to Book Your Slot
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDoctorPage;
