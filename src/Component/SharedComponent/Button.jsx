import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-[#FF5A3C] text-white px-[27px] py-[15px] text-lg ">
      {children}
    </button>
  );
};

export default Button;
