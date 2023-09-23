import React, { useState } from "react";
import { Modal } from "./Modal";

const BottomRight = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="">
      <div className="flex flex-col  items-center space-y-3">
        <button
          className="bg-[#F5F5F5] h-[80px] w-[80px] rounded-full text-6xl text-[#999CA0] "
          onClick={() => setShowModal(true)}
        >
          <p className="mb-3">+</p>
        </button>
        <p className="text-[#999CA0] font-semibold text-sm">Add Profile</p>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default BottomRight;
