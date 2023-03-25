import React from "react";
import Button from "./Button";

const Description = () => {
  return (
    <div className="px-0 rounded-md bg-[#849E66]">
      <div className="px-4 py-16">
        <h3 className="uppercase mb-4 text-[#F8AA71]">La nostra <br />mission</h3>
        <p className="mb-8 text-gray-100">Questo progetto nasce con l’intento di dare la possibilità davvero a tutti di potersi prendere cura di sé da ogni luogo e in ogni momento disponibile. </p>
        <h2 className="mb-4">Pratico e accessibile </h2>
        <p className="mb-8 text-gray-100">Matcha Studio costa quanto un caffè del mattino, ed è aperto H24/7!<br /><br />
Le lezioni sono LIVE ma rimangono registrate per quando non riesci ad essere presente.<br /><br />
Matcha Studio ha insegnanti competenti sempre a tua disposizione e ti riserva una consulenza gratuita per capire quale è il corso più adatto a te.<br /><br />
Matcha Studio si adegua alle tue necessità!</p>
        <Button title="Voglio parlare con Angelica" className="bg-[#F8AA71] text-gray-100" />
      </div>
    </div>
  );
};

export default Description;
