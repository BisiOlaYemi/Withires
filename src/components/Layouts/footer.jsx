import React from "react";
import styles  from "../../components/constants/styles";
import logo  from "../../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className={`${styles.paddingX} w-full flex justify-center items-center py-t bottom-0 z-20 bg-primary`}
    >
      <img 
        src={logo} 
        alt="logo" 
        className="w-9 h-9 object-contain" 
      />
      
      <p className="text-gray-800 text-[18px] font-bold cursor-pointer flex">
        &copy; {currentYear}. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;