import {
  Dashicon,
  Schduleicon,
  Settinicon,
  Transactionicon,
  Usericon,
} from "../assets/icons";

const Indash = () => {
  return (
    <div className="mt-2 mb-3 ml-5 md:ml-0 ">
      <div className="flex items-center space-x-4 ">
        <Dashicon />
        <p className="text-white text-lg font-bold ">Dashboard</p>
      </div>
      <div className="flex items-center space-x-4 mt-6">
        <Transactionicon />
        <p className="text-white text-lg ">Transcation</p>
      </div>
      <div className="flex items-center space-x-4 mt-6">
        <Schduleicon />
        <p className="text-white text-lg ">Schedules</p>
      </div>
      <div className="flex items-center space-x-4 mt-6">
        <Usericon />
        <p className="text-white text-lg">Users</p>
      </div>
      <div className="flex items-center space-x-4 mt-6">
        <Settinicon />
        <p className="text-white text-lg">Settings</p>
      </div>
      <div className="flex flex-row mt-3 md:flex-col md:mt-96 space-x-2 md:space-x-0">
        <p className="text-white">Help</p>
        <p className="text-white">Contact Us</p>
      </div>
    </div>
  );
};
export default Indash;
