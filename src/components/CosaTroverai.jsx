import React from "react";
import Button from "./Button";
import Item from "./Item";

const CosaTroverai = () => {
  return (
    <div className="px-2 xs:px-4 pt-12 mb-12 lg:pt-20 lg:mb-20">
      <h2 className="font-black mb-4 title-shadow md:text-center md:w-[25rem] md:mx-auto">
        Cosa troverai nella scuola
      </h2>
      <p className="mb-8 md:text-center md:w-[18rem] md:mx-auto">
        Tanti professionisti pronti a farti immergere nel loro mondo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Item name="Yin & Yang Yoga" className="bg-[url('https://ik.imagekit.io/mauand/matcha-studio/item1.jpg?updatedAt=1680096505273')] text-white" />
        <Item
          name="Pranayama e Yoga Emozionale"
          className="bg-[url('https://ik.imagekit.io/mauand/matcha-studio/item2.jpg?updatedAt=1680096504128')] text-white"
        />
        <Item name="Sound Healing" className="bg-[url('https://ik.imagekit.io/mauand/matcha-studio/item3.jpg?updatedAt=1680096502824')] text-white" />
        <Item
          name="Aroma terapia e Oli Essenziali"
          className="bg-[url('https://ik.imagekit.io/mauand/matcha-studio/item4.jpg?updatedAt=1680096500687')] text-white"
        />
        <Item
          name="Corso introduttivo per principianti"
          className="bg-[url('https://ik.imagekit.io/mauand/matcha-studio/item5.jpg?updatedAt=1680096505226')] text-white"
        />
        <div className="bg-gradient text-white title-shadow rounded-xl flex justify-center items-center h-28 md:h-36 text-center">
          <h5>e molto altro..</h5>
        </div>
      </div>
      <p className="mt-8 mb-4 text-center">
        Tutto questo in un unico abbonamento!
      </p>
      <div className="md:text-center">
        <Button
          title="Attiva ora la tua prova gratuita"
          className="bg-primary text-white"
        />
      </div>
    </div>
  );
};

export default CosaTroverai;
