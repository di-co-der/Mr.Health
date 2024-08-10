import React from "react";
import { useNavigate } from "react-router-dom";

//components
import StarRating from "../../components/discoverHospitalPage/StarRating";

//assets
import CallIcon from "../../assets/svgs/CallIcon.svg";

const HospitalCard = ({ hospital, highlightedFilters = [] }) => {
  const navigate = useNavigate();

  const handleHospital = () => {
    const hospitalName = hospital.name
      .split(" ")
      .slice(0, 2)
      .join("-")
      .toLowerCase();
    navigate(`/discover-hospitals/${hospitalName}/${hospital.id}`);
  };

  const handleAppointment = () => {
    const hospitalName = hospital.name
      .split(" ")
      .slice(0, 2)
      .join("-")
      .toLowerCase();
    navigate(`/discover-hospitals/${hospitalName}/${hospital.id}/slot`);
  };

  const handleCall = () => {
    window.location.href = `tel:${hospital.phoneNumber}`;
  };

  return (
    <div className="pt-2 pb-4 px-2 border-b-4 border-gray-300">
      <div
        className="pt-2 pb-4 bg-red400 cursor-pointer hover:rounded-lg transition-all hover:shadow-md border-gray-300 border-b"
        onClick={handleHospital}
      >
        <div className="flex">
          <img
            src={hospital.image}
            alt={hospital.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold leading-5 pb-1 truncate-two-lines">
              {hospital.name}
            </h3>
            <p className="text-gray-600 text-sm leading-4 pb-0.5 truncate-two-lines">
              {hospital.address}
            </p>
            <div className="flex items-center my-2">
              <StarRating rating={hospital.rating} />
              <span className="ml-2 text-gray-500 font-medium text-sm italic">
                ({hospital.rating})
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 pl-2">
          {hospital.tags.map((tag, index) => (
            <span
              key={index}
              className={`border text-gray-800 px-2 py-1 rounded-md text-xs flex items-center ${
                highlightedFilters.includes(tag)
                  ? "bg-[#e5f9f9] border-[#00cccc]"
                  : "border-gray-500"
              }`}
            >
              {highlightedFilters.includes(tag) && (
                <svg
                  className="w-4 h-4 mr-1 text-[#00cccc]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="pt-3 px-1 tiny:px-2 flex justify-between items-center">
        <button
          className="bg-[#25d366] hover:bg-[#20c35b] font-normal flex items-center gap-2 text-white px-3 tiny:px-5 py-2 rounded-2xl"
          onClick={handleCall}
        >
          <img src={CallIcon} alt="" />
          {hospital.phoneNumber}
        </button>
        <button
          className="text-white px-3 tiny:px-5 py-2 rounded-2xl hover:bg-[#017ae4]  bg-[#0086ff] max-[400]:px-2"
          onClick={handleAppointment}
        >
          Book Appointment
        </button>
      </div>

      <style>{`
        .truncate-two-lines {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
};

export default HospitalCard;
