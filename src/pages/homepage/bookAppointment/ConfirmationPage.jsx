import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../components/common/Header";
import NeedHelp from "../../../assets/svgs/NeedHelp.svg";
function ConfirmationPage() {

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
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
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
              </svg>
            </div>
            <span className="ml-3 text-lg font-semibold text-green-600">
              Appointment Confirmed
            </span>
          </div>
          <p className="text-center text-gray-700 mb-6 px-12 text-sm">
            Your Appointment ID is <strong>11001</strong>. We have also sent the
            details of your appointment on your registered phone number.
          </p>

          <div className="border-2 border-gray-300 rounded-lg p-4">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <div className="text-gray-500">Appointment Time</div>
                <div className="text-gray-900 font-semibold">
                  Sat, 9 Sep 11:30 AM
                </div>
              </div>
              <div className="flex justify-between items-center mb-3">
                <div className="text-gray-500">Doctor's Name</div>
                <div className="text-gray-900 font-semibold flex items-center">
                  <img
                    src="/path/to/doctor-image.jpg" // replace with actual path
                    alt="Dr. Raja Selvarajan"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  Dr. Raja Selvarajan
                </div>
              </div>
              <div className="text-gray-500 mb-2">Clinic's Details</div>
              <div className="text-gray-900 font-semibold">
                35/1, 1st Floor, Kaveri Healthcare, Indra Nagar - Varthur Main
                Road
              </div>
              <div className="mt-4">
                <img
                  src="/path/to/map-image.png" // replace with actual path
                  alt="Clinic Location"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300">
                Cancel
              </button>
              <button className="flex-1 border-2 border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-500 hover:text-white">
                Reschedule
              </button>
            </div>
          </div>
        </div>

        {/* <div className="border-b-[2px] mt-3 pb-5">
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
        </div> */}

        <div className="pl-4 py-5  mb-20 flex items-start gap-4">
          <img src={NeedHelp} className="pt-1" alt="" />
          <div className="">
            <h3 className="text-lg font-semibold">Need Help?</h3>
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
