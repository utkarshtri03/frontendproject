import React from "react";
import { Discord, Github, Linkedin, Twitter } from "../assets/icons";

const Socialmedia = () => {
  return (
    <div className="flex space-x-5">
      <Github />
      <Twitter />
      <Linkedin />
      <Discord />
    </div>
  );
};

export default Socialmedia;
