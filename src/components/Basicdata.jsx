import React, { useState } from "react";
import { useAppContext } from "./contextapi";
import { Dropbottom } from "../assets/icons";

const Basicdata = ({ onNext }) => {
  const { name, setName, email, setEmail, phone, setPhone } = useAppContext();

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    if (!e.target.value.trim()) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.trim()) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    if (!e.target.value.trim()) {
      setPhoneError("Phone is required");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = () => {
    if (name.trim() === "") {
      setNameError("Name is required*");
    }
    if (email.trim() === "") {
      setEmailError("Email is required*");
    }
    if (phone.trim() === "") {
      setPhoneError("Phone is required*");
    }

    if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "") {
      onNext();
    }
  };

  return (
    <div className="flex flex-col mx-6 ">
      <div className="flex flex-col ">
        <label className="mt-[15px]">Enter Name*</label>
        <div className="mt-[7px] border border-[#F2F2F2] rounded-xl h-[40px] flex items-center justify-between px-[14px] ">
          <input
            type="text"
            placeholder="Eg. John Doe"
            value={name}
            onChange={handleName}
            className="w-full h-full "
          />
        </div>
        {nameError && <p className="text-red-500 text-sm ml-2 ">{nameError}</p>}

        <label className="mt-[15px]">Enter email*</label>
        <div className="mt-[7px] border border-[#F2F2F2] rounded-xl h-[40px] flex items-center justify-between px-[14px] ">
          <input
            type="text"
            placeholder="Eg. John@xyz.com"
            value={email}
            onChange={handleEmail}
            className="w-full h-full "
          />
          <Dropbottom />
        </div>
        {emailError && (
          <p className="text-red-500 text-sm ml-2 ">{emailError}</p>
        )}

        <label className="mt-[15px]">Enter Phone*</label>
        <div className="mt-[7px] border border-[#F2F2F2] rounded-xl h-[40px] flex items-center justify-between px-[14px] ">
          <input
            type="text"
            placeholder="Eg. 9123456789"
            value={phone}
            onChange={handlePhone}
            className="w-full h-full "
          />
          <Dropbottom />
        </div>
        {phoneError && (
          <p className="text-red-500 text-sm ml-2 ">{phoneError}</p>
        )}
      </div>
      <div className=" my-[20px] border-t border-[#F2F2F2] flex justify-end  ">
        <button
          className="bg-[#4285F4] mt-[20px] text-white rounded-lg h-[35px] w-[60px] "
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Basicdata;
