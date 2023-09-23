import { Bellicon, Searchicon } from "../assets/icons";

const Navbar = () => {
  return (
    <div className="flex bg-neutral-100 justify-between space-x-2  rounded-lg m-5 md:m-3 py-3 items-center ">
      <h1 className="font-bold text-2xl text-black">Dashboard</h1>
      <div className="flex justify-center items-center space-x-3 sm:space-x-6 w-[190px] md:w-1/3 ">
        <div className="flex rounded-lg bg-white items-center px-4 py-2 w-1/2 sm:w-full ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full
          "
          />
          <Searchicon />
        </div>
        <div className="w-3 h-3">
          <Bellicon />
        </div>
        <img
          className="rounded-full"
          src="/profile.png"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};
export default Navbar;
