import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//components
import Header from "../../../components/common/Header";
import MapComponent from "../../../components/bookAppointmentPage/specialtyPage/bookDoctorPage/MapComponent";

//assets
import mapSvg from "../../../../src/assets/svgs/map.svg";
import userAvatar from "../../../../src/assets/User_Avatar.jpg";
import starGroup from "../../../../src/assets/Star Group.jpg";
import messageIcon from "../../../../src/assets/svgs/messageIcon.svg";
import like from "../../../../src/assets/svgs/Like.svg";
import sideArrow from "../../../../src/assets/svgs/Side-arrow.svg";
import CallIcon from "../../../assets/svgs/CallIcon.svg";
import TimingsIcon from "../../../../src/assets/svgs/TimingsIcon.svg";

//data
import { userData } from "../../../data/userStories";
import hospitals from "../../../data/hospitals";

function BookHospitalPage() {
  const { hospitalName, hospitalId } = useParams();
  const hospital = hospitals.find((h) => h.id === parseInt(hospitalId));

  if (!hospital) {
    return <div>Hospital not found</div>;
  }

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

  const navigate = useNavigate();
  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };
  const handleSlot = () => {
    navigate(`/discover-hospitals/${hospitalName}/${hospital.id}/slot`);
  };

  const handleCall = () => {
    window.location.href = `tel:${hospital.phoneNumber}`;
  };

  return (
    <div className="min-h-screen max-w-sm mx-auto items-center">
      <header className="pt-[60px]">
        <Header title={hospital.name} onClick={handleAppointmentClick} />
      </header>
      <div className="pb-20 rounded-lg shadow-md">
        <div className="mb-2 fixed top-16 left-0px w-full h-[200px] -z-10 max-w-sm mx-auto">
          <img
            src={hospital.image}
            alt="hospital_image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white mt-48">
          {/* Rating and Timing Section */}
          <div className="flex items-center mb-2 pl-4 pt-1">
            <img src={starGroup} alt="Rating" className="w-24" />
            <span className="text-gray-600 text-sm ml-2 italic font-medium">
              ({hospital.rating})
            </span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1 pl-4">
              <img src={TimingsIcon} alt="" className="w-4 h-4 pt-0.5" />
              <span className="text-gray-600 text-sm">
                Timings: {hospital.timings}
              </span>
            </div>
            <span className="bg-[#ccf5f5] text-[#00cccc] text-xs ml-2 px-4 mr-4 py-1 rounded-full">
              Open Today
            </span>
          </div>

          {/* locaton */}
          <div className="border-b-[2px] mt-3 pb-5 pt-4 px-4">
            <div className="flex justify-center items-start gap-3">
              <img src={mapSvg} className="mt-1"></img>
              <div className=" text-[14px] text-[#525252] font-medium pb-2">
                {" "}
                {hospital.address}
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center gap-3">
                <MapComponent
                  coordinates={hospital.coordinates}
                  location={hospital.address}
                />{" "}
              </div>
            </div>
          </div>

          {/* patient stories */}
          <div className="border-b-[2px] pb-5 mt-3 px-4">
            <div className="font-semibold text-[#0086FF] ">Patient Stories</div>
            <div className="text-[10px] text-gray-400 leading-3">
              *These stories represent patient opinions and experiences. They do
              not reflect the doctor’s medical capabilities.
            </div>
          </div>

          {/* recommendation */}
          <div className="flex justify-center items-center border-b-[2px] pb-5 mt-3 px-4">
            <div className="  flex justify-center items-center ">
              <img src={like} className="px-4"></img>
              <div className=" font-semibold text-[18px] pr-6">92%</div>
            </div>

            <div className=" pl-4 text-[14px] text-[#525252] text-wrap border-l-2">
              Out of 2500 patients surveyed, 92 % of them recommend visiting
              this hospital
            </div>
          </div>

          {/* stories heading */}
          <div className="flex items-center gap-2 mt-3 px-4">
            <img src={messageIcon}></img>
            <div className="text-[12px] text-[#525252] font-semibold">
              STORIES
            </div>
          </div>

          {/* user story */}
          <div className="px-4">
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
          <div className="px-4">
            <div className=" font-semibold p-2 mb-4 flex flex-wrap">
              More about {hospital.name}
            </div>

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
          <footer className="fixed bottom-0 inset-x-0 flex justify-between border-t-[3px] border-[#d9d9d9] pt-3 pb-3 px-4 bg-[#fafafa] z-[10000]">
            <button
              className="bg-[#25d366] font-normal flex items-center gap-2 text-white px-4 py-2 rounded-2xl"
              onClick={handleCall}
            >
              <img src={CallIcon} alt="" />
              {hospital.phoneNumber}
            </button>
            <button
              className="text-white px-4 py-2 rounded-2xl bg-[#0086ff] max-[400]:px-2 hover:bg-[#0080ee]"
              onClick={handleSlot}
            >
              Book Your Slot
              </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default BookHospitalPage;
