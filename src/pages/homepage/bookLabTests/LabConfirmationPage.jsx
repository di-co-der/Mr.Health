import React from "react";
import { useNavigate } from "react-router-dom";

const PickUpConfirmation = () => {

  const navigate = useNavigate();
  const handleHomepage = () => {
    navigate("/");
};

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="p-4 max-w-sm w-full mt-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Pick Up Confirmation</h1>
          <button className="text-gray-600">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>

        <div className="mt-4 flex items-center">
          <i className="fas fa-check-circle text-green-500"></i>
          <p className="ml-2 text-green-500 font-medium">Pick Up Confirmed</p>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-500">Track Pick UP ID: 14089</p>
        </div>

        <div className="mt-4">
          <div className="w-full h-40 bg-gray-300 rounded-lg overflow-hidden">
            {/* Placeholder for map image */}
            <img
              src="https://via.placeholder.com/300x150.png?text=Map"
              alt="Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-4 border-t pt-4">
          <h2 className="text-lg font-semibold">Package Details</h2>
          <div className="mt-2 flex justify-between">
            <p className="text-sm">1 x Lipid Profile Basic</p>
            <p className="text-sm">₹ 1199</p>
          </div>
          <div className="mt-2 flex justify-between">
            <p className="text-sm">1 x Women’s Basic Health Checkup</p>
            <p className="text-sm">₹ 1999</p>
          </div>
          <div className="mt-2 flex justify-between border-t pt-2">
            <p className="text-base font-semibold">Total MRP</p>
            <p className="text-base font-semibold">₹ 3198</p>
          </div>
        </div>
      <div className="bg-gray-300 h-2 my-4"></div>
      </div>

      <div className="w-full max-w-sm mt-4">
        <button className="text-blue-500 w-full py-3">Help</button>
      </div>

      {/* <div className="w-full max-w-sm mt-4">
        <button className="w-full  text-white py-3 rounded-lg">
        </button>
      </div> */}

      
      <footer className="fixed bottom-0 inset-x-0 border-t-[3px] border-[#d9d9d9] pt-3 pb-3 px-8 bg-[#fafafa] z-[10000]">
        <button
          className="w-full text-white py-2 rounded-lg bg-[#00cccc] hover:bg-[#3dbfbf]"
          onClick={handleHomepage}
        >
          Back To Home Screen
          </button>
      </footer>
    </div>
  );
};

export default PickUpConfirmation;
