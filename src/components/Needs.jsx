import React from "react";

const Needs = () => {
  return (
    <div className=" mx-2 xs:mx-4 px-2 py-8 lg:my-20 my-12 xs:px-4 bg-yellowish rounded-xl lg:flex lg:gap-8">
      <div className="px-2 lg:order-2 lg:pt-8 lg:pr-12">
        <h2 className="mb-4 title-shadow">Di cosa hai bisogno</h2>
        <p className="mb-12">
          Prendersi cura di sé è una priorità, non un'attività a tempo perso. Scrivilo in agenda! :)
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-2 sm:gap-4">
        <div className="bg-grayish rounded-xl px-4 py-8 h-60 flex flex-col justify-end">
          <img
            src="https://ik.imagekit.io/mauand/tr:w-400/matcha-studio/1yogi.png"
            alt="yogi uno"
            className="w-40 mx-auto mb-4"
          />
          <h6 className="uppercase justify-self-end">IL DESIDERIO DI SENTIRTI BENE</h6>
        </div>
        <div className="bg-grayish rounded-xl px-4 py-8 h-60 flex flex-col justify-end">
          <img
            src="https://ik.imagekit.io/mauand/tr:w-400/matcha-studio/2yogi.png"
            alt="yogi uno"
            className="w-36 mx-auto mb-4"
          />
          <h6 className="uppercase justify-self-end">UN PICCOLO SPAZIO TRANQUILLO</h6>
        </div>
        <div className="bg-grayish rounded-xl px-4 py-8 h-60 flex flex-col justify-end">
          <img
            src="https://ik.imagekit.io/mauand/tr:w-400/matcha-studio/3yogi.png"
            alt="yogi uno"
            className="w-40 mx-auto mb-4"
          />
          <h6 className="uppercase ">UN MOMENTO PER IL TUO BENESSERE</h6>
        </div>
        <div className="bg-grayish rounded-xl px-4 py-8 h-60 flex flex-col justify-end">
          <img
            src="https://ik.imagekit.io/mauand/tr:w-400/matcha-studio/4yogi.png"
            alt="yogi uno"
            className="w-32 mx-auto mb-4"
          />
          <h6 className="uppercase ">UN DISPOSITIVO DAL QUALE CONETTERTI</h6>
        </div>
      </div>
    </div>
  );
};

export default Needs;
