import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiClinic } from "react-icons/bi";

//components
import Header from "../../../components/common/Header";
import MapComponent from "../../../components/bookAppointmentPage/specialtyPage/bookDoctorPage/MapComponent";

//data
import { doctors } from "../../../data/doctors";

//assets
import NeedHelp from "../../../assets/svgs/NeedHelp.svg";
import BookingTimeIcon from "../../../assets/svgs/BookingTimeIcon.svg";
import BookingUser from "../../../assets/svgs/BookingUser.svg";
import Tick from "../../../assets/svgs/Tick.svg";
import Cross from "../../../assets/svgs/Cross.svg";

function ConfirmationPage() {
  const { specialty, doctorName, doctorId } = useParams();
  const doctor = doctors.find((doc) => doc.id === parseInt(doctorId));

  if (!doctor) {
    return <div>Doctor not found!</div>;
  }

  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/my-appointments");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  // const handleCancelClick = () => {
  //   // Implement cancellation logic here
  // };

  // const handleRescheduleClick = () => {
  //   // Implement reschedule logic here
  // };

  return (
    <div className="min-h-screen w-full max-w-sm mx-auto">
      <header className="pt-[60px]">
        <Header title="Booking Confirmation" onClick={handleAppointmentClick} />
      </header>

      {/* Remaining Part */}

      <main className="">
        <div className=" pt-6 px-4 pb-6 border-b-4">
          <div className="flex items-center justify-center mb-4 text-[#25d366]">
            <div className="flex items-center justify-center rounded-full ">
              {/* <svg
                className="h-6 w-6 text-[#25d366]"
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
                ></path>
              </svg> */}
              <img src={Tick} alt="" />
            </div>
            <span className="ml-3 text-lg font-semibold">
              Appointment Confirmed
            </span>
          </div>
          <p className="text-center text-gray-700 mb-6 px-12 text-sm">
            Your Appointment ID is <strong>11001</strong>. We have also sent the
            details of your appointment on your registered phone number.
          </p>

          <div className="border-2 border-gray-300 rounded-lg p-4">
            <div className="mb-5">
              <div className="mb-4">
                <div className="flex gap-2 text-sm mb-1">
                  <img src={BookingTimeIcon} alt="" className="pt-0.5" />
                  <p className="text-[#7a7a7a]">Appointment Time</p>
                </div>
                <p className="font-medium flex gap-2 items-center pl-6 text-lg">
                  Sat, 9 Sep 11:30 AM{" "}
                  <span className="text-lg text-gray-500 font-normal">|</span>
                  <span className="text-gray-500 flex gap-1 items-center font-normal text-sm">
                    <img src={BookingTimeIcon} className="w-4" alt="" />
                    Today
                  </span>
                </p>
              </div>
              <div className="border border-gray-300 mb-4"></div>

              <div className="flex justify-between items-center mb-3">

                <div>
                <div className="flex gap-2 text-sm mb-1">
                  <img src={BookingUser} alt="" />
                  <p className="text-[#7a7a7a]">
                    Doctor's Name</p>
                </div>
                  <div className="text-gray-900 pl-6 font-semibold flex items-center text-lg">
                    {doctor.name}
                  </div>
                </div>
                <img
                  src={doctor.image}
                  alt="Doctor"
                  className="w-12 h-12 rounded-full mr-2"
                />
              </div>

              <div className="border border-gray-300 mb-4"></div>

              <div className="flex gap-2 text-sm mb-1">
                  <BiClinic className="text-[#7a7a7a] my-auto w-4 h-4" />
                  <p className="text-[#7a7a7a]">Clinic's Details</p>
                </div>

              <div className="text-gray-900 font-medium pl-6">{doctor.map}</div>
              <div className="mt-2">
                <div className="">
                  <div className="flex justify-center items-center gap-3 -z-10">
                    <MapComponent
                      coordinates={doctor.coordinates}
                      location={doctor.map}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-12">
              <button className="flex-1 text-[#7a7a7a] border-2 border-[#7a7a7a] py-2 rounded-lg">
                <div className="flex justify-center items-center gap-2">
                <img src={Cross} alt="" className="" />
                <p>Cancel</p>
                </div>
              </button>
              <button className="flex-1 border-2 border-[#0086ff] text-[#0086ff] py-2 rounded-lg transition-all hover:bg-[#0086ff] hover:text-white">
                Reschedule
              </button>
            </div>
          </div>
        </div>

        <div className="pl-4 py-5  mb-24 flex items-start gap-4">
          <img src={NeedHelp} className="pt-1" alt="" />
          <div className="">
            <h3 className="text-lg font-semibold">Need Help ?</h3>
            <p className="text-sm text-gray-500 leading-4 ">
              In case you cannot make for the appointment, please cancel or
              reschedule the appointment, preferably 2 hours prior to the
              scheduled time.
            </p>
          </div>
        </div>
      </main>

      {/* Remaining Part */}

      <footer className="fixed bottom-0 inset-x-0 border-t-[3px] border-[#d9d9d9] pt-3 pb-3 px-8 bg-[#fafafa]">
        <button
          className="w-full bg-[#00cccc] text-white py-2 rounded-lg hover:bg-[#02c1c1]"
          onClick={handleHomeClick}
        >
          Back to HomeScreen
        </button>
      </footer>
    </div>
  );
}

export default ConfirmationPage;
