import React, { useState } from "react";
import { useAppContext } from "./contextapi";

const OptionalData = ({ onBack, onClose1 }) => {
  const { setInsta, setYoutube, setShowBottomRight2 } = useAppContext();

  const handleinsta = (e) => {
    setInsta(e.target.value);
  };

  const handleYoutube = (e) => {
    setYoutube(e.target.value);
  };

  const handleDoneClick = () => {
    onClose1();
    setShowBottomRight2(true);
  };

  return (
    <div className="flex flex-col mx-6 ">
      <div className="flex flex-col">
        <label className="mt-[15px] flex ">
          Instagram Link <p className="text-[#999CA0] ml-1">(Optional)</p>
        </label>
        <div className="mt-[7px] border border-[#F2F2F2] rounded-xl h-[40px] flex items-center justify-between px-[14px] ">
          <input
            type="text"
            placeholder="Eg. ..instagram/username"
            onChange={handleinsta}
            className="h-full w-full"
          />
        </div>
        <label className="mt-[15px] flex">
          Youtube Link
          <p className="text-[#999CA0] ml-1">(Optional)</p>
        </label>
        <div className="mt-[7px] border border-[#F2F2F2] rounded-xl h-[40px] flex items-center justify-between px-[14px] ">
          <input
            type="text"
            placeholder="Eg. ..youtube/username"
            onChange={handleYoutube}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="my-[20px] border-t border-[#F2F2F2] flex justify-end  ">
        <div className="flex space-x-[10px] mt-[4px]">
          <button
            className="mt-[20px] rounded-lg h-[35px] w-[60px] border border-[#999CA0] "
            onClick={onBack}
          >
            Back
          </button>
          <button
            className="bg-[#4285F4] mt-[20px] text-white rounded-lg h-[35px] w-[60px] "
            onClick={handleDoneClick}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionalData;
