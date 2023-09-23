import { useState } from "react";
import Indash from "./Indash";

const Bluedash = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-[#4285F4] w-full min-w-[200px] md:w-1/5 md:mx-10 md:my-5  md:rounded-3xl">
      <div className="md:relative top-10 left-[16%] flex flex-col">
        <div className="flex flex-row justify-between items-center md:flex-col md:justify-normal md:items-start">
          <div className="text-white text-3xl font-bold mb-6 m-2">Board.</div>
          <div>
            <button
              className="text-white focus:outline-none md:hidden"
              onClick={toggleMenuHandler}
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Indash />
          </div>
        )}
        {!isOpen && (
          <div className="hidden md:block">
            <Indash />
          </div>
        )}
      </div>
    </div>
  );
};

export default Bluedash;
