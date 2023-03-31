import React from "react";

const Teacher = ({ name, desc, className }) => {
  return (
    <div
      className={`w-full cursor-pointer h-48 md:h-60 rounded-xl text-center ${className} bg-center bg-cover`}
    >
      <div className="h-full w-full py-8 px-6 rounded-xl backdrop-brightness-[.6] flex flex-col justify-end items-center">
        <h5 className="title-shadow">{name}</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Teacher;
