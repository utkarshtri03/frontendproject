import React from "react";
import BottomRight from "./BottomRight";
import Bottomright2 from "./Bottomright2";
import { useAppContext } from "./contextapi";

const Bottomrightparent = () => {
  const { showBottomRight2 } = useAppContext();
  console.log();
  return (
    <div className="rounded-xl w-full md:w-1/2 h-[300px]  bg-white flex justify-center items-center overflow-hidden border border-[#E0E0E0] shadow-lg ">
      {showBottomRight2 ? <Bottomright2 /> : <BottomRight />}
    </div>
  );
};

export default Bottomrightparent;
