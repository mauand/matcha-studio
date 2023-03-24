import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="container px-6 mb-14">
      <h1 className="font-black mb-5 mt-12">
        Yoga <br />e molto altro in unico studio virtuale
      </h1>
      <p className="mb-5">
        Matcha Studio funziona come un vero centro di Yoga e fitness, ti abboni
        mensilmente ed hai accesso a tutte le attività inerenti al mondo del
        benessere
      </p>
      <div className="flex flex-col gap-2 items-center mb-24">
        <Button title={"Ottieni la"} className="" />
        <p className="text-xs">...e unisciti alla community</p>
      </div>
      <img
        src="../hero.jpg"
        alt="Due persone che fanno yoga online"
        className="rounded-md"
      />
    </div>
  );
};

export default Hero;
