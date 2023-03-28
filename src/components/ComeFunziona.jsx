import React from "react";

const ComeFunziona = () => {
  return (
    <div className="px-2 xs:px-4 py-8">
      <h5 className="mb-2">Come funziona</h5>
      <h2 className="mb-12 md:w-[25rem]">È facile e veloce...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient h-96 p-4 relative rounded-xl col-span-1 md:col-span-2">
          <div className="bg-primary h-10 w-10 rounded-md flex justify-center items-center text-white font-bold text-xl mb-4">
            1
          </div>
          <p className="text-white title-shadow title-card font-bold">
            Ti registri per la tua settimana di prova gratuita, senza nessun
            costo nascosto.
          </p>
          <img
            src="/matcha-studio/mobile-card-1.png"
            alt="registrazione su telefono"
            className="absolute bottom-0 left-4 h-48 sm:h-52 md:hidden"
          />
          <img
            src="/matcha-studio/pc-card-1.png"
            alt="registrazione su pc"
            className="absolute bottom-0 left-1/3 hidden md:block h-60 lg:left-4 lg:h-52"
          />
        </div>
        <div className="bg-yellowish h-96 p-4 relative rounded-xl flex flex-col justify-between">
          <div className="bg-primary h-10 w-10 rounded-md flex justify-center items-center text-white font-bold text-xl mb-4">
            2
          </div>
          <p className="title-card font-bold">
            Prenoti una delle classi LIVE o cerchi il corso più adatto a te
            nella libreria.
          </p>
          <img
            src="/matcha-studio/card-2.png"
            alt="prenotazione lezione su telefono"
            className="absolute top-0 right-0 h-52 sm:h-60 rounded-tr-xl lg:h-48"
          />
        </div>
        <div className="bg-goldish h-96 p-4 relative rounded-xl">
          <div className="bg-primary h-10 w-10 rounded-md flex justify-center items-center text-white font-bold text-xl mb-4">
            3
          </div>
          <p className="title-card font-bold">
            Ti godi la tua classe comodamente da dove vuoi tu!
          </p>
          <img
            src="/matcha-studio/card-3.png"
            alt="registrazione su telefono"
            className="absolute bottom-0 right-0 h-52 sm:h-60 rounded-br-xl lg:h-48"
          />
        </div>
      </div>
    </div>
  );
};

export default ComeFunziona;
