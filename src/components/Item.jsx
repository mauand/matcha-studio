import React from "react";

const Item = ({ name, className }) => {
  return (
    <div
      className={`w-full h-28 md:h-32 rounded-xl text-center ${className} bg-center bg-cover`}
    >
      <div className="h-full w-full py-8 px-6 rounded-xl backdrop-brightness-[.6] flex justify-center items-center">
        <h5 className="title-shadow">{name}</h5>
      </div>
    </div>
  );
};

export default Item;
