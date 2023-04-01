import React, { useEffect } from "react";
import * as te from "tw-elements";
import Button from "./Button";



const Accordions = ({
  domanda1,
  risposta1,
  domanda2,
  risposta2,
  domanda3,
  risposta3,
  domanda4,
  risposta4,
  domanda5,
  risposta5,
  domanda6,
  risposta6,
  domanda7,
  risposta7,
  domanda8,
  risposta8,
  domanda9,
  risposta9,
  domanda10,
  risposta10,
  domanda11,
  risposta11,
}) => {
  return (
    <div className="px-2 xs:px-4 py-12 lg:py-18">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 md:bg-grayish md:rounded-xl md:px-4 md:py-8 lg:px-8 lg:py-16">
        <div className="lg:col-span-1">
          <h1 className="mb-4 lg:mb-8 title-shadow text-slate-900">Domande frequenti</h1>
          <p className="mb-4 lg:hidden text-slate-800">
            Se qualcosa non ti è chiaro prova a cercare in questa sezione le tue
            risposte.
          </p>
          <p className="hidden lg:block text-slate-800">Hai altri dubbi?</p>
          <p className="mb-2 lg:mb-4 hidden lg:block text-slate-800">
            Parla direttamente con Angelica su Whatsapp, ti sta aspettando e non
            vede l’ora di conoscerti :)
          </p>
          <div className="text-center hidden lg:block">
            <Button
              title="Invia un messaggio Whatsapp"
              className="bg-greenish text-white hover:bg-[#6fc86c]"
              link="https://wa.me/393493149813?text=Ciao%20Angelica,%20ti%20contatto%20dal%20sito%20di%20Matcha%20Studio.%20Vorrei%20informazioni%20riguardo%20"
            />
          </div>
        </div>
        <div
          id="accordionExample"
          className="mb-8 flex flex-col gap-4 lg:col-span-2"
        >
          <div className="bg-grayish md:bg-white rounded-xl">
            <h2 className="mb-0 font-normal" id="headingOne">
              <button
                className="group relative flex w-full items-center rounded-xl bg-grayish md:bg-white py-4 px-4 gap-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none md:[&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:bg-grayish"
                type="button"
                data-te-collapse-init
                data-te-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {domanda1}
                <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="!visible"
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="headingOne"
              data-te-parent="#accordionExample"
            >
              <p className="py-4 px-4 text-gray-700">{risposta1}</p>
            </div>
          </div>
          <div className="bg-grayish md:bg-white rounded-xl">
            <h2 className="mb-0 font-normal" id="headingTwo">
              <button
                className="group relative flex w-full items-center rounded-xl bg-grayish md:bg-white py-4 px-4 gap-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none md:[&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:bg-grayish "
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                {domanda2}
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 motion-reduce:transition-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingTwo"
              data-te-parent="#accordionExample"
            >
              <p className="py-4 px-4 text-gray-700">{risposta2}</p>
            </div>
          </div>
          <div className="bg-grayish md:bg-white rounded-xl">
            <h2 className="accordion-header mb-0 font-normal" id="headingThree">
              <button
                className="group relative flex w-full items-center rounded-xl bg-grayish md:bg-white py-4 px-4 gap-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] md:[&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:bg-grayish"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                {domanda3}
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingThree"
              data-te-parent="#accordionExample"
            >
              <p className="py-4 px-4 text-gray-700">{risposta3}</p>
            </div>
          </div>
          <div className="bg-grayish md:bg-white rounded-xl">
            <h2 className="mb-0 font-normal" id="headingFour">
              <button
                className="group relative flex w-full items-center rounded-xl bg-grayish md:bg-white py-4 px-4 gap-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none md:[&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:bg-grayish"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                {domanda4}
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 motion-reduce:transition-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingFour"
              data-te-parent="#accordionExample"
            >
              <p className="py-4 px-4 text-gray-700">{risposta4}</p>
            </div>
          </div>
          <div className="bg-grayish md:bg-white rounded-xl">
            <h2 className="mb-0 font-normal" id="headingFive">
              <button
                className="group relative flex w-full items-center rounded-xl bg-grayish md:bg-white py-4 px-4 gap-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none md:[&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:bg-grayish"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                {domanda5}
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 motion-reduce:transition-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseFive"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingFive"
              data-te-parent="#accordionExample"
            >
              <p className="py-4 px-4 text-gray-700">{risposta5}</p>
            </div>
          </div>
          <div className="bg-grayish md:bg-white rounded-xl">
            <h2 className="mb-0 font-normal" id="headingSix">
              <button
                className="group relative flex w-full items-center rounded-xl bg-grayish md:bg-white py-4 px-4 gap-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none md:[&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:bg-grayish"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                {domanda6}
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 motion-reduce:transition-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseSix"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingSix"
              data-te-parent="#accordionExample"
            >
              <p className="py-4 px-4 text-gray-700">{risposta6}</p>
            </div>
          </div>
          <div className="bg-grayish md:bg-white rounded-xl">
            <h2 className="mb-0 font-normal" id="headingSeven">
              <button
                className="group relative flex w-full items-center rounded-xl bg-grayish md:bg-white py-4 px-4 gap-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none md:[&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:bg-grayish"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                {domanda7}
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 motion-reduce:transition-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingSeven"
              data-te-parent="#accordionExample"
            >
              <p className="py-4 px-4 text-gray-700">{risposta7}</p>
            </div>
          </div>
          <div className="bg-grayish md:bg-white rounded-xl">
            <h2 className="mb-0 font-normal" id="headingEight">
              <button
                className="group relative flex w-full items-center rounded-xl bg-grayish md:bg-white py-4 px-4 gap-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none md:[&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:bg-grayish"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                {domanda8}
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 motion-reduce:transition-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseEight"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingEight"
              data-te-parent="#accordionExample"
            >
              <p className="py-4 px-4 text-gray-700">{risposta8}</p>
            </div>
          </div>
          <div className="bg-grayish md:bg-white rounded-xl">
            <h2 className="mb-0 font-normal" id="headingNine">
              <button
                className="group relative flex w-full items-center rounded-xl bg-grayish md:bg-white py-4 px-4 gap-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none md:[&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:bg-grayish"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                {domanda9}
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 motion-reduce:transition-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseNine"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingNine"
              data-te-parent="#accordionExample"
            >
              <p className="py-4 px-4 text-gray-700">{risposta9}</p>
            </div>
          </div>
          <div className="bg-grayish md:bg-white rounded-xl">
            <h2 className="mb-0 font-normal" id="headingTen">
              <button
                className="group relative flex w-full items-center rounded-xl bg-grayish md:bg-white py-4 px-4 gap-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none md:[&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:bg-grayish"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                {domanda10}
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 motion-reduce:transition-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseTen"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingTen"
              data-te-parent="#accordionExample"
            >
              <p className="py-4 px-4 text-gray-700">{risposta10}</p>
            </div>
          </div>
          <div className="bg-grayish md:bg-white rounded-xl">
            <h2 className="mb-0 font-normal" id="headingEleven">
              <button
                className="group relative flex w-full items-center rounded-xl bg-grayish md:bg-white py-4 px-4 gap-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none md:[&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:bg-grayish"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                {domanda11}
                <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 motion-reduce:transition-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseEleven"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="headingEleven"
              data-te-parent="#accordionExample"
            >
              <p className="py-4 px-4 text-gray-700">{risposta11}</p>
            </div>
          </div>
        </div>
        <div className="text-center lg:hidden">
        <p className="">Hai altri dubbi?</p>
          <p className="mb-4 lg:mb-8">
            Parla direttamente con Angelica su Whatsapp, ti sta aspettando e non
            vede l’ora di conoscerti :)
          </p>
          <Button
            title="Invia un messaggio Whatsapp"
            className="bg-greenish text-white hover:bg-green-700"
            link="https://wa.me/393493149813?text=Ciao%20Angelica,%20ti%20contatto%20dal%20sito%20di%20Matcha%20Studio.%20Vorrei%20informazioni%20riguardo%20"
          />
        </div>
      </div>
    </div>
  );
};

export default Accordions;
