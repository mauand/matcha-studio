import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-hero p-0 bg-cover bg-center rounded-b-xl min-w-[100vw]">
      <div className="px-2 xs:px-4 md:pl-12 min-h-screen pt-12 rounded-b-xl bg-gradient min-w-[100vw]">
        <div className="containerino">
          <h1 className="font-black mb-4 w-48 title-shadow text-[#F8FA9A] md:text-[4.6rem] md:w-[38rem] md:mt-[5rem]">
            Yoga e molto altro in unico studio virtuale
          </h1>
          <p className="mb-8 text-slate-100 md:w-[38rem]">
            Matcha Studio funziona come un vero centro di Yoga e fitness, ti
            abboni mensilmente ed hai accesso a tutte le attività inerenti al
            mondo del benessere
          </p>
          <div className="flex flex-col gap-2 items-center md:items-start mb-8">
            <Button
              title="Ottieni la tua settimana gratuita"
              className="bg-[#e07a5f] text-white"
            />
            <p className="text-xs text-slate-100">
              ...ed entra a far parte di questa grande famiglia!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
