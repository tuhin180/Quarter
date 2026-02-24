import React from "react";

const Button = ({ onclick, text, className = "" }) => {
  return (
    <button
      onclick={onclick}
      className={`bg-[#FF5A3C] text-white px-[27px] py-[15px] text-lg cursor-pointer   ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
