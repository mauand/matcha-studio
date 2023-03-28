import React from "react";

const Description = () => {
  return (
    <div className="px-2 xs:px-4 -mt-32 xs:-mt-48 md:-mt-64 pb-16">
      <div className="mb-2 h-80 md:h-[22rem] lg:h-[29rem] bg-video bg-cover rounded-xl">
        <div className="w-full h-full backdrop-brightness-[.9] rounded-xl flex justify-center items-center">
          <div className="bg-slate-100 rounded-full w-12 h-12 flex justify-center items-center">
            <div className="bg-orange-600 rounded-full w-3 h-3"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 flex-wrap">
        <div className="min-h-[18rem] bg-tree center bg-cover rounded-xl sm:flex-1">
          <h4 className="text-slate-50 title-shadow backdrop-brightness-[.7] w-full min-h-[18rem] h-full pt-4 pl-4 pr-12 rounded-xl">
            Dare a tutti la possibilità di prendersi cura di sé, da ogni luogo e
            in ogni momento
          </h4>
        </div>
        <div className="min-h-[18rem] bg-yellowish rounded-xl sm:flex-1 p-2 flex flex-col justify-between">
          <h3 className="title-shadow p-2 sm:mb-4 font-black">
            Lezioni <span className="text-primary">LIVE</span>
          </h3>

          <div className="flex flex-col gap-2">
            <div className="bg-slate-100 w-full rounded-xl p-2 sm:p-3">
              <div className="flex gap-3 items-center sm:h-[5.5rem]">
                <img
                  src="/matcha-studio/live.png"
                  alt="live icon"
                  className="h-10 w-10"
                />
                <div>
                  <p className="font-bold text-[16px] sm:text-[18px]">
                    Tante live ogni settimana
                  </p>
                  <p className="text-[14px]">
                    Vivi la vicinanza con gli insegnanti e con la community
                    comodamente da casa tua.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 w-full rounded-xl p-2 sm:p-3">
              <div className="flex gap-3 items-center sm:h-[5.5rem]">
                <img
                  src="/matcha-studio/rec.png"
                  alt="rec icon"
                  className="h-10 w-10"
                />
                <div>
                  <p className="font-bold text-[16px] sm:text-[18px]">
                    Tutto il catalogo registrato
                  </p>
                  <p className="text-[14px]">
                    Tutte le lezioni rimangono disponibili per la visione. In
                    più avrai dei percorsi prestabiliti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
