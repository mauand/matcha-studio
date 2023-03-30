import React from "react";

const Button = ({ title, className }) => {
  return (
    <button
      className={`w-full max-w-[22rem] py-4 font-bold rounded-md text-sm uppercase shadow-md transition-all hover:bg-orange-700 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
