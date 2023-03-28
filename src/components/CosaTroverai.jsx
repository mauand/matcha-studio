import React from "react";
import Button from "./Button";
import Item from "./Item";

const CosaTroverai = () => {
  return (
    <div className="px-2 sm:px-4 py-6">
      <h1 className="font-black mb-4 text-gray-800">Cosa troverai dentro</h1>
      <p className="mb-8">
        Tanti professionisti pronti a farti immergere nel loro mondo.
      </p>
      <Item name="Yoga e Meditazione" className="bg-item1 text-white" />
      <Item name="Pranayama e respirazione" className="bg-[#43aa8b] text-white" />
      <Item name="Corso introduttivo per principianti" className="bg-[#56af5c] text-white" />
      <Item name="Mini corsi per obiettivi specifici" className="bg-[#90be6d] text-white" />
      <Item name="Sound Healing" className="bg-[#f9c74f] text-white" />
      <Item name="Aroma terapia" className="bg-[#f9844a] text-white" />
      <Item name="Alimentazione consapevole" className="bg-[#ea6544] text-white" />
      <Item name="e molto altro..." className="bg-[#d34b4e] text-white" />
      <p className="mt-8 mb-4 text-center">Tutto questo in un unico abbonamento!</p>
      <Button title="Attiva ora la tua prova gratuita" className="bg-[]" />
    </div>
  );
};

export default CosaTroverai;
