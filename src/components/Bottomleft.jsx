import { Dropbottom } from "../assets/icons";
import Piechart1 from "../charts.jsx/piechart";

const BottomLeft = () => {
  return (
    <div className="rounded-xl w-full md:w-1/2 h-50  bg-white border border-[#E0E0E0] shadow-lg ">
      <div className="flex space-x-24 mt-2 py-2 pl-4 relative">
        <h3 className="text-[110%] font-bold absolute top-1 left-8 ">
          Top Products
        </h3>
        <div className="flex text-sm space-x-1 items-center absolute top-1 right-[4%]">
          <p className="text-[80%] sm:text-sm text-gray-500">May - June 2021</p>
          <Dropbottom />
        </div>
      </div>
      <div className="flex justify-center items-center space-x-[3%]  sm:space-x-32 md:space-x-[3%] mt-8 mx-1 sm:mx-3 md:mx-0 ">
        <div className="h-56 w-48">
          <Piechart1 />
        </div>

        <div>
          <div>
            <div className="flex space-x-3 items-center">
              <div className="bg-[#98D89E] rounded-full h-3 w-3"></div>
              <p className="font-bold text-[80%] ">Basic Tees</p>
            </div>
            <p className=" ml-6 text-[#858585] text-[80%] ">55%</p>
          </div>
          <div>
            <div className="flex space-x-3 items-center">
              <div className="bg-[#F6DC7D] rounded-full h-3 w-3"></div>
              <p className="font-bold text-[80%] ">Custom Shorts Pants</p>
            </div>
            <p className=" ml-6 text-[#858585] text-[80%] ">31%</p>
          </div>
          <div>
            <div className="flex space-x-3 items-center">
              <div className="bg-[#EE8484] rounded-full h-3 w-3"></div>
              <p className="font-bold text-[80%]">Super Hoodies</p>
            </div>
            <p className=" ml-6 text-[#858585] text-[80%] ">14%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BottomLeft;
