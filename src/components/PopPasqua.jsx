import React, { useEffect, useState } from "react";
import PopUp from "./PopUp";
import Button from "./Button";

const PopPasqua = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopUp(true);
    }, 3000);
  }, []);

  return (
    <>
      <PopUp trigger={showPopUp} setTrigger={setShowPopUp}>
        <div
          onClick={() => setShowPopUp(false)}
          className="fixed top-0 left-0 bg-white/70 z-[80] h-[100vh] w-[100vw] p-2 flex justify-center items-center"
        >
          <div className="h-[30rem] w-11/12 lg:w-[50rem] lg:h-[25rem] bg-[url('https://ik.imagekit.io/mauand/tr:w-1500/matcha-studio/video.jpg')] bg-cover bg-center rounded-xl relative shadow-2xl z-[90]">
            <button
              onClick={() => setShowPopUp(false)}
              className="absolute top-2 right-3 text-white text-sm"
            >
              chiudi
            </button>
            <div className="w-full h-full bg-black/50 z-10 p-4 lg:p-8 rounded-xl flex flex-col justify-center items-center">
              <h1 className="lg:text-[3rem] text-[3rem] text-center text-white title-shadow mb-4">
                Promo di Pasqua
              </h1>
              <p className="text-yellowish title-shadow text-[1.2rem] lg:text-[1.6rem] font-bold uppercase mb-8">
                3 mesi al prezzo di 2
              </p>
              <div className="flex gap-4 items-baseline mb-2">
                <h2 className="lg:text-[6rem] text-[5rem] text-primary title-shadow">
                  70€
                </h2>
                <h3 className="lg:text-[2.5rem] line-through text-slate-300 ">
                  105€
                </h3>
              </div>
              <p className="text-slate-300 mb-8">Valida dal 1 al 5 Aprile</p>
              <Button
                title="Ottieni ora la promo"
                className="bg-gradients text-white"
                link="https://www.momoyoga.com/matcha-studio/member/orderstartdate/119602"
              />
            </div>
          </div>
        </div>
      </PopUp>
    </>
  );
};

export default PopPasqua;
