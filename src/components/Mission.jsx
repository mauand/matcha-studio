import React from "react";
import Button from "./Button";

const Description = () => {
  return (
    <div className="px-0 rounded-md bg-[#dbe6cf]">
      <div className="px-4 py-16">
        <h3 className="uppercase mb-4 text-[#2A9D8F]">La nostra <br />mission</h3>
        <p className="mb-8">Questo progetto nasce con l’intento di dare la possibilità davvero a tutti di potersi prendere cura di sé da ogni luogo e in ogni momento disponibile. </p>
        <h2 className="mb-4 drop-shadow-md text-gray-800">Pratico e accessibile </h2>
        <p className="mb-8">Matcha Studio costa quanto un caffè del mattino, ed è aperto H24/7!<br /><br />
Le lezioni sono LIVE ma rimangono registrate per quando non riesci ad essere presente.<br /><br />
Matcha Studio ha insegnanti competenti sempre a tua disposizione e ti riserva una consulenza gratuita per capire quale è il corso più adatto a te.<br /><br />
Matcha Studio si adegua alle tue necessità!</p>
        <Button title="Voglio parlare con Angelica" className="bg-[#e07a5f] text-gray-100" />
      </div>
    </div>
  );
};

export default Description;
