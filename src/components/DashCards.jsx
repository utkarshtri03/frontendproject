import React from "react";

const DashCards = ({ money, heading, bg1, imgs, percent, dropdown }) => {
  return (
    <div className="bg-white rounded-xl w-full  lg:w-[200px] h-28 p-5 relative border border-[#E0E0E0] shadow-lg ">
      <div
        className={`absolute top-3 left-5 rounded-full bg-${bg1} h-7 w-7 flex justify-center items-center  `}
      >
        <img src={imgs} alt="" />
      </div>
      <div className="pt-7">
        <p className="md:text-[80%] ">{heading}</p>
        <h1 className="font-bold text-[120%] ">{money}</h1>
      </div>
      <img
        className="absolute right-12 md:right-[23%] bottom-5 "
        src={dropdown}
        alt=""
      />
      <div className="bg-[#E9F9EB] text-[#3CC952] w-8 md:w-[15%] text-[8px] rounded-xl absolute bottom-5  right-3 md:right-[5%] items-center justify-center pl-1 md:pl-0 ">
        {percent}
      </div>
    </div>
  );
};

export default DashCards;
