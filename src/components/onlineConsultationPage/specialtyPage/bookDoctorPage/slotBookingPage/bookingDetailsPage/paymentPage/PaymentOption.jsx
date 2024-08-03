import React from "react";
import CustomRadioButton from "./CustomRadioButton";

const PaymentOption = ({ options, selectedOption, onChange, title }) => (
  <div className="">
    <h2 className="text-lg font-semibold">{title}</h2>
    <div className="flex flex-col gap-4">
      {options.map((option) => (
        <CustomRadioButton
          key={option.value}
          value={option.value}
          label={option.label}
          selected={selectedOption}
          onChange={onChange}
        />
      ))}
      {title === "" && (
        <button className="flex items-center justify-start">
          <span className="bg-[#d2eaff] px-1.5 rounded-md text-[#027fee] text-2xl">
            +
          </span>
          <span className="ml-3 text-[#7a7a7a]">Add New UPI ID</span>
        </button>
        
      )}
      {title === " " && (
        <button className="flex items-center justify-start">
          <span className="bg-[#d2eaff] px-1.5 rounded-md text-[#027fee]  text-2xl">
            +
          </span>
          <span className="ml-3 text-[#7a7a7a]">Add New Card</span>
        </button>
      )}
    </div>
  </div>
);

export default PaymentOption;
