import Socialmedia from "../components/Socialmedia";
import Card from "../components/card";
import Cardbutton from "../components/cardbutton";

export const Login = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row h-screen">
      <div
        style={{
          boxSizing: "border-box",
          borderRight: "100px solid #F8FAFF",
          borderTop: "100vh solid transparent",
        }}
        className="w-100% md:w-5/12 md:h-screen bg-[#4285F4] hidden md:flex  justify-center items-center"
      >
        <div className="text-white absolute top-7 left-8 font-bold text-2xl ">
          LOGO
        </div>
        <div className="text-white text-6xl font-bold absolute top-[40%]">
          Board.
        </div>
        <div className="absolute bottom-7">
          <Socialmedia />
        </div>
      </div>
      <div className="bg-[#4285F4] md:bg-[#F8FAFF]  h-screen w:100% md:w-7/12 flex justify-center items-center flex-col overflow-hidden ">
        <div className="text-white absolute top-[2%] left-[2%] font-bold md:hidden ">
          LOGO
        </div>
        <div className="text-white text-5xl font-bold absolute top-[3%] md:hidden">
          Board.
        </div>
        <div className="absolute bottom-2 w-[70%] pl-[8%] sm:pl-[20%]   md:hidden">
          <Socialmedia />
        </div>
        <div className="mx-2 md:mx-0">
          <div>
            <h1 className="font-bold text-4xl pb-3">Sign In</h1>
            <p>Sign in to your account</p>
          </div>
          <Cardbutton />
          <Card />
          <p className="text-center mt-3 text-#F8FAFF md:text-gray-400 ">
            Didn't have a account?
            <a href="" className="text-#F8FAFF md:text-blue-600">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
