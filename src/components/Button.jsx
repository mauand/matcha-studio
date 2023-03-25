import React from "react";

const Button = ({ title, className }) => {
  return (
    <button className={`w-full py-4 font-bold rounded-md text-sm uppercase shadow-md hover:bg-green-800 transition-all ${className}`}>
      {title}
    </button>
  );
};

export default Button;
