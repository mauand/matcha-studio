import React from "react";

const Button = ({ title }) => {
  return (
    <button className="w-full py-4 bg-green-600 text-white font-bold rounded-md text-sm uppercase shadow-md hover:bg-green-800">
      {title}
    </button>
  );
};

export default Button;
