import React from "react";
import { useAppContext } from "./contextapi";
import { Instadash, Maildash, Youtubedash } from "../assets/icons";

const Bottomright2 = () => {
  const { name, email, phone, insta, youtube } = useAppContext();
  console.log(name);
  return (
    <div className="h-full w-full">
      <h1 className="font-bold text-3xl mt-10 ml-9 ">{name}</h1>
      <div className="flex mt-[40px] ml-[5%] sm:-[10%] md:ml-[10%] space-x-[10%] sm:space-x-[20%] md:space-x-[10%] ">
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-2 ">
            <div className="bg-[#E9F9EB] h-8 w-8 rounded-full flex justify-center items-center mb-1 p-[2px] ">
              <img className="px-[1px]" src="/whatsapp.svg" alt="" />
            </div>
            <div className="text-[70%] mb-2 border-b border-black">{phone}</div>
          </div>
          <div className="flex space-x-2 items-center ">
            <div className="bg-[#E9F9EB] h-8 w-8 rounded-full flex justify-center items-center mb-1">
              <Maildash />
            </div>
            <div className="text-sm mb-2 border-b border-black w-1/2 ">
              {email}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex space-x-2 items-center  ">
            <div className="bg-[#FFE9EC] h-8 w-8 rounded-full flex justify-center items-center ">
              <Instadash />
            </div>
            <div className="text-sm mb-2 border-b border-black ">{insta}</div>
          </div>
          <div className="flex space-x-2 items-center  ">
            <div className="bg-[#FFE9E9] h-8 w-8 rounded-full flex justify-center items-center mb-1 ">
              <Youtubedash />
            </div>
            <div className="text-sm mb-2 border-b border-black ">{youtube}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottomright2;
