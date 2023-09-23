import React, { useState } from "react";
import Basicdata from "./Basicdata";
import OptionalData from "./OptionalData";

export const Modal = ({ isVisible, onClose }) => {
  const [currentStep, setCurrentStep] = useState("basic");
  const [activeTab, setActiveTab] = useState("basic");

  const goToBasicData = () => {
    setCurrentStep("basic");
    setActiveTab("basic");
  };

  const goToOptionalData = () => {
    setCurrentStep("optional");
    setActiveTab("contact");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className=" w-[70%] md:w-[500px] bg-white rounded-xl ">
        <div className="flex justify-between items-center mx-3 h-[50px] border-b border-[#F2F2F2]">
          <div className="font-semibold text-xl">Add New Profile</div>
          <button onClick={onClose} className="text-[#999CA0] text-2xl">
            X
          </button>
        </div>

        <div className="flex space-x-[10%] h-[50px] mx-6 ">
          <div
            className={`w-1/2 border-b-[4px] ${
              activeTab === "basic" ? "border-[#3F84F8]" : ""
            } flex items-center justify-center `}
            onClick={goToBasicData}
          >
            Basic
          </div>
          <div
            className={`w-1/2 border-b-[4px] ${
              activeTab === "contact" ? "border-[#3F84F8]" : ""
            } flex items-center justify-center `}
            onClick={goToOptionalData}
          >
            Contact
          </div>
        </div>
        <div className="">
          {currentStep === "basic" ? (
            <Basicdata onNext={goToOptionalData} />
          ) : (
            <OptionalData onBack={goToBasicData} onClose1={onClose} />
          )}
        </div>
      </div>
    </div>
  );
};
