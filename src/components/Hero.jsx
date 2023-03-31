import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      className={`bg-[url('https://ik.imagekit.io/mauand/tr:w-1500/matcha-studio/hero.jpg')] p-0 bg-cover bg-center rounded-b-xl min-w-[100vw]`}
    >
      <div className="px-2 xs:px-4 md:pl-12 min-h-screen h-[750px] fk:min-h-0 fk:h-[1200px] pt-12 rounded-b-xl bg-gradient min-w-[100vw]">
        <div className="containerino">
          <h1 className="font-black mb-4 w-48 title-shadow text-[#F8FA9A] md:text-[4.5rem] md:w-[38rem] md:mt-[5rem] fk:mt-[12rem]">
            Yoga e molto altro in unico studio virtuale
          </h1>
          <p className="mb-8 text-slate-100 md:w-[38rem]">
            Matcha Studio funziona come un vero centro olistico, ti
            abboni mensilmente ed hai accesso a tutte le attività inerenti al
            mondo del benessere
          </p>

          <div className="flex flex-col gap-2 items-center md:items-start mb-8">
              <Button
                title="Ottieni la tua settimana gratuita"
                className="bg-[#e07a5f] text-slate-100 hover:bg-[#e6704f] transition-colors"
                link="https://www.momoyoga.com/matcha-studio/register"
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
