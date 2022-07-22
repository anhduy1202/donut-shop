import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaYelp, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-button-pink mx-[-16px] py-4 flex flex-col items-center">
      <div className="flex gap-9 justify-center">
        <AiFillInstagram color="white" size={28} />
        <FaYelp color="white" size={28} />
        <FaFacebook color="white" size={28} />
      </div>
      <p className="mt-4 text-white text-12 font-lemonada font-semibold"> Copyright @2022 </p>
    </footer>
  );
};

export default Footer;
