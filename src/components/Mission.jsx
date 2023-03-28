import React from "react";
import Button from "./Button";

const Description = () => {
  return (
    <div className="px-6 neg-mar pb-16">
      <div className="mb-2 h-80 bg-video bg-cover rounded-xl">
        <div className="w-full h-full backdrop-brightness-[.9] rounded-xl flex justify-center items-center">
          <div className="bg-slate-100 rounded-full w-12 h-12 flex justify-center items-center">
            <div className="bg-orange-600 rounded-full w-3 h-3"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 flex-wrap">
        <div className="h-72 bg-tree center bg-cover rounded-xl sm:flex-1">
          <h4 className="text-slate-50 title-shadow backdrop-brightness-[.7] w-full h-full pt-4 pl-4 pr-12 rounded-xl">
            Dare a tutti la possibilità di prendersi cura di sé, da ogni luogo e
            in ogni momento
          </h4>
        </div>
        <div className="h-72 bg-slate-400 rounded-xl sm:flex-1"></div>
      </div>
    </div>
  );
};

export default Description;
