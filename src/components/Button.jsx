import React from "react";

const Button = ({ title, className, link }) => {
  return (
    <a href={link} className="w-full max-w-[22rem]"  target="_blank">
    <button 
      className={`w-full max-w-[22rem] text-center py-4 font-bold rounded-md text-sm uppercase shadow-md transition-all ${className}`}
    >
      {title}
    </button>
    </a>
  );
};

export default Button;
