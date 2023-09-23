import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="flex flex-col rounded-xl h-80 w-full space-y-2 mt-6 bg-white">
      <label className="ml-8 pt-5">Email</label>
      <input type="text" className="w-5/6 mx-8 p-2 rounded-lg bg-neutral-100" />
      <label className="ml-8 pt-3">Password</label>
      <input
        type="password"
        className="w-5/6 mx-8 p-2 rounded-lg bg-neutral-100"
      />
      <a href="/dashboard" className="ml-8 mt-2 text-blue-600 py-3">
        Forgot password?
      </a>
      <Link to="/dashboard">
        <button className="bg-[#4285F4] text-white w-5/6 mx-8 mt-2 p-2 rounded-lg">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Card;
