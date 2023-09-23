import { Dropbottom } from "../assets/icons";
import Barchart1 from "../charts.jsx/Barchart";
import Bluedash from "../components/Bluedash";
import BottomLeft from "../components/Bottomleft";
import Bottomrightparent from "../components/Bottomrightparent";
import Navbar from "../components/Navbar";
import Whitecards from "../components/Whitecards";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-neutral-100 overflow-hidden">
      <Bluedash />
      <div className=" w-full md:w-2/3 md:ml-[1.5%] mb-4 ">
        <Navbar />
        <Whitecards />
        <div className="m-5 md:mx-0 md:mt-5 rounded-lg relative bg-white border border-[#E0E0E0] shadow-lg ">
          <div className="ml-5 pt-5 mb-0">
            <h1 className="text-black font-bold text-lg">Activities</h1>
            <div className="flex text-sm space-x-1 items-center">
              <p className="text-sm text-gray-500">May - June 2021</p>
              <Dropbottom />
            </div>
          </div>
          <div className="flex absolute right-5 top-5 space-x-5">
            <div className="flex space-x-3 items-center">
              <div className="bg-[#E9A0A0] h-3 w-3 rounded-full "></div>
              <div>Guest</div>
            </div>
            <div className="flex space-x-3 items-center ">
              <div className="bg-[#9BDD7C] h-3 w-3 rounded-full"></div>
              <div>User</div>
            </div>
          </div>
          <div className=" w-100%  h-[250px] mt-2 ">
            <Barchart1 />
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-7 mx-5 md:mx-0 ">
          <BottomLeft />
          <Bottomrightparent />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
