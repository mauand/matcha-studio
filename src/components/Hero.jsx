import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="px-4 py-16">
      <h1 className="font-black text-[#588157] mb-4 drop-shadow-md">
        Yoga <br />e molto altro in unico studio virtuale
      </h1>
      <p className="mb-8">
        Matcha Studio funziona come un vero centro di Yoga e fitness, ti abboni
        mensilmente ed hai accesso a tutte le attività inerenti al mondo del
        benessere
      </p>
      <div className="flex flex-col gap-2 items-center mb-8">
        <Button title= "Ottieni la tua settimana gratuita" className="bg-[#e07a5f] text-gray-100" />
        <p className="text-xs">
          ...ed entra a far parte di questa grande famiglia!
        </p>
      </div>
      <img
        src="/matcha-studio/hero.jpg"
        alt="Due persone che fanno yoga online"
        className="rounded-md mb-8"
      />
      <h4 className="text-bold">
        Tante lezioni multidisciplinari LIVE <br />
        già disponibili, e tante altre in arrivo!
      </h4>
    </div>
  );
};

export default Hero;
