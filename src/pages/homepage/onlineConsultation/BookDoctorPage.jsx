import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//components
import Header from "../../../components/common/Header";
import MapComponent from "../../../components/bookAppointmentPage/specialtyPage/bookDoctorPage/MapComponent";

//data
import { doctors } from "../../../data/doctors";
import { userData } from "../../../data/userStories";

//assets
import mapSvg from "../../../../src/assets/svgs/map.svg";
import userAvatar from "../../../../src/assets/User_Avatar.jpg";
import starGroup from "../../../../src/assets/Star Group.jpg";
import messageIcon from "../../../../src/assets/svgs/messageIcon.svg";
import like from "../../../../src/assets/svgs/Like.svg";
import sideArrow from "../../../../src/assets/svgs/Side-arrow.svg";

const BookDoctorPage = () => {
  // Get doctorId from URL params
  const { doctorId } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(doctorId));

  if (!doctor) {
    return <div>Doctor not found!</div>;
  }

  //Handle MyAppointment
  const navigate = useNavigate();
  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  //Handle book your slot button
  const handleBookYourSlotClick = (doctorId, doctorName, specialty) => {
    navigate(
      `/online-consultation/${specialty
        .toLowerCase()
        .replace(/ /g, "-")}/${doctorName
        .toLowerCase()
        .replace(/[\s.]+/g, "-")}/${doctorId}/slot`
    );
  };

  //handle user stories
  const [expandedStories, setExpandedStories] = useState({});
  const [showAll, setShowAll] = useState(false);

  const handleReadMoreToggle = (id) => {
    setExpandedStories((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const visibleStories = showAll ? userData : userData.slice(0, 2);

  return (
    <div className="min-h-screen max-w-sm mx-auto items-center">
      <header className="pt-[60px]">
        <Header title={doctor.name} onClick={handleAppointmentClick} />
      </header>

      {/* <DoctorDetails doctor={doctor} /> */}
      <div className="bg-white px-3 py-4 rounded-lg shadow-md">
        {/* doctor info card  */}
        <div className="flex justify-between items-center mb-4 cursor-pointer">
          <div className=" max-w-[60%]">
            <div className="text-[18px] font-medium">{doctor.name}</div>
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
        <div className="flex justify-center items-center flex-wrap gap-3 border-b-[2px] pb-5">
          <div className="text-center grow basis-1/5 border-[1px] border-[#00CCCC] pl-2 pr-2">
            <div className=" text-[#0086FF] text-[14px] font-semibold">
              {doctor.patients}
            </div>
            <div className=" text-[12px] font-semibold text-[#525252]">
              Patients
            </div>
          </div>
          <div className="text-center grow basis-1/5 border-[1px] border-[#00CCCC] ">
            <div className=" text-[#0086FF] text-[14px] font-semibold">
              {doctor.experience}
            </div>
            <div className=" text-[12px] font-semibold text-[#525252]">
              Experience
            </div>
          </div>
          <div className="text-center grow basis-1/5 border-[1px] border-[#00CCCC]">
            <div className=" text-[#0086FF] text-[14px] font-semibold">
              {doctor.location}
            </div>
            <div className=" text-[12px] font-semibold text-[#525252]">
              Location
            </div>
          </div>
          <div className="text-center grow basis-1/5 border-[1px] border-[#00CCCC]">
            <div className=" text-[#0086FF] text-[14px] font-semibold">
              {doctor.fees}
            </div>
            <div className=" text-[12px] font-semibold text-[#525252]">
              Fees
            </div>
          </div>
        </div>

        {/* locaton */}
        <div className="border-b-[2px] mt-3 pb-5">
          <div className="flex justify-center items-start gap-3">
            <img src={mapSvg} className="mt-1"></img>
            <div className=" text-[14px] text-[#525252] font-medium pb-2">
              {" "}
              {doctor.map}
            </div>
          </div>
          <div className="">
            <div className="flex justify-center items-center gap-3">
              <MapComponent
                coordinates={doctor.coordinates}
                location={doctor.map}
              />{" "}
            </div>
          </div>
        </div>

        {/* patient stories */}
        <div className="border-b-[2px] pb-5 mt-3">
          <div className="font-semibold text-[#0086FF] ">Patient Stories</div>
          <div className="text-[10px] text-gray-400 leading-3">
            *These stories represent patient opinions and experiences. They do
            not reflect the doctor’s medical capabilities.
          </div>
        </div>

        {/* recommendation */}
        <div className="flex justify-center items-center border-b-[2px] pb-5 mt-3 ">
          <div className="  flex justify-center items-center ">
            <img src={like} className="px-4"></img>
            <div className=" font-semibold text-[18px] pr-6">92%</div>
          </div>

          <div className=" pl-4 text-[14px] text-[#525252] text-wrap border-l-2">
            Out of 2500 patients surveyed, 92 % of them recommend visiting this
            hospital
          </div>
        </div>

        {/* stories heading */}
        <div className="flex items-center gap-2 mt-3">
          <img src={messageIcon}></img>
          <div className="text-[12px] text-[#525252] font-semibold">
            STORIES
          </div>
        </div>

        {/* user story */}
        <div>
          {visibleStories.map((user) => (
            <div key={user.id} className="main-div border-b-2 mt-3 pb-3">
              <div className="flex justify-between items-center p-2">
                <div className="flex justify-center items-center gap-4">
                  <div className="avatar">
                    <img src={userAvatar} alt={`${user.username}'s avatar`} />
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold cursor-pointer">
                      {user.username}
                    </div>
                    <div className="text-[12px] text-[#525252]">
                      {user.posted}
                    </div>
                  </div>
                </div>
                <div className="rating bg-white">
                  <img src={starGroup} alt="star rating" />
                </div>
              </div>
              <div className={`text-[12px] font-semibold ml-14 p-1`}>
                {user.title}
              </div>
              <div className={`text-[12px] text-[#525252] ml-14 p-1`}>
                {expandedStories[user.id]
                  ? user.story
                  : `${user.story.substring(0, 100)}...`}
                <button
                  className="text-blue-500 underline font-medium"
                  onClick={() => handleReadMoreToggle(user.id)}
                >
                  {expandedStories[user.id] ? "Read less" : "Read more"}
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center border-b-2 mt-3 px-6 pb-3 ">
            <div
              className="text-[12px] text-[#0086FF] cursor-pointer font-medium"
              onClick={handleShowAll}
            >
              {showAll
                ? "Hide stories"
                : `Read all stories (${userData.length})`}
            </div>
            <div className="text-[12px] cursor-pointer font-medium">
              Share Your Story
            </div>
          </div>
        </div>

        {/* more about doctor  */}
        <div>
          <div className=" font-semibold p-2 mb-4">More about Doctor name</div>

          <div className="flex justify-between items-center p-2 border-b-[2px] cursor-pointer transition-all group hover:shadow-md">
            <div className="text-[14px] text-[#525252]">
              Specialization and Services
            </div>
            <div className="group-hover:-translate-x-2 group-hover:scale-105">
              <img src={sideArrow}></img>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 border-b-[2px] cursor-pointer transition-all group hover:shadow-md">
            <div className="text-[14px] text-[#525252] ">
              Awards and Recognitions
            </div>
            <div className="group-hover:-translate-x-2 group-hover:scale-105">
              <img src={sideArrow}></img>
            </div>
          </div>
          <div className="flex justify-between items-center p-2 border-b-[2px] mb-20 cursor-pointer transition-all group hover:shadow-md">
            <div className="text-[14px] text-[#525252]">Experience</div>
            <div className="group-hover:-translate-x-2 group-hover:scale-105">
              <img src={sideArrow}></img>
            </div>
          </div>
        </div>

        {/* button */}
        <footer className="fixed bottom-0 inset-x-0 flex justify-center gap-5 border-t-[3px] border-[#d9d9d9] pt-3 pb-3 bg-[#fafafa]">
          <button className="bg-[#e76161] text-white py-2 px-6 rounded-lg hover:bg-[#d65757]">Consult Now</button>
          <button
            className="bg-[#0086ff] text-white py-2 px-6 rounded-lg hover:bg-[#0080ee]"
            onClick={() =>
              handleBookYourSlotClick(doctor.id, doctor.name, doctor.specialty)
            }
          >
            Reserve A Slot
          </button>
        </footer>
      </div>
    </div>
  );
};

export default BookDoctorPage;
