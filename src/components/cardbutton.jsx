import { Appleicon, Googleicon } from "../assets/icons";

const Cardbutton = () => {
  return (
    <div className="flex space-x-3 sm:space-x-9 mt-3">
      <div className="flex items-center bg-white rounded-lg py-1 px-3 space-x-2">
        <Googleicon />
        <p className="text-sm sm:text-base">Sign in with Google</p>
      </div>

      <div className="flex items-center bg-white rounded-lg py-1 px-3 space-x-2">
        <Appleicon />
        <p className="text-sm sm:text-base">Sign in with Apple</p>
      </div>
    </div>
  );
};
export default Cardbutton;
