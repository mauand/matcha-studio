import React from "react";
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
}) => {
  return (
    <div className="px-2 xs:px-4 py-12 lg:py-18">
      <h1 className="mb-4">Domande frequenti</h1>
      <p className="mb-8">
        Se qualcosa non ti è chiaro prova a cercare in questa sezione le tue
        risposte.
      </p>
      <div id="accordionExample" className="mb-8">
        <div className="rounded-t-lg border border-neutral-200 bg-white">
          <h2 className="mb-0 font-normal" id="headingOne">
            <button
              className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-3 px-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-greenish [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
              type="button"
              data-te-collapse-init
              data-te-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {domanda1}
              <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none ">
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
        <div className="border border-t-0 border-neutral-200 bg-white">
          <h2 className="mb-0 font-normal" id="headingTwo">
            <button
              className="group relative flex w-full items-center rounded-none border-0 bg-white py-3 px-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-greenish [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {domanda2}
              <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#308654] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#308654] motion-reduce:transition-none">
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
        <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white">
          <h2 className="accordion-header mb-0 font-normal" id="headingThree">
            <button
              className="group relative flex w-full items-center border-0 bg-white py-3 px-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none[&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-greenish [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {domanda3}
              <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
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
        <div className="border border-t-0 border-neutral-200 bg-white">
          <h2 className="mb-0 font-normal" id="headingFour">
            <button
              className="group relative flex w-full items-center rounded-none border-0 bg-white py-3 px-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-greenish [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              {domanda4}
              <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#308654] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#308654] motion-reduce:transition-none">
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
        <div className="border border-t-0 border-neutral-200 bg-white">
          <h2 className="mb-0 font-normal" id="headingFive">
            <button
              className="group relative flex w-full items-center rounded-none border-0 bg-white py-3 px-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-greenish [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              {domanda5}
              <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#308654] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#308654] motion-reduce:transition-none">
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
        <div className="border border-t-0 border-neutral-200 bg-white">
          <h2 className="mb-0 font-normal" id="headingSix">
            <button
              className="group relative flex w-full items-center rounded-none border-0 bg-white py-3 px-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-greenish [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              {domanda6}
              <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#308654] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#308654] motion-reduce:transition-none">
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
        <div className="border border-t-0 border-neutral-200 bg-white">
          <h2 className="mb-0 font-normal" id="headingSeven">
            <button
              className="group relative flex w-full items-center rounded-none border-0 bg-white py-3 px-3 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-greenish [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
              type="button"
              data-te-collapse-init
              data-te-collapse-collapsed
              data-te-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              {domanda7}
              <span className="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#308654] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#308654] motion-reduce:transition-none">
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
      </div>
      <p className="text-center mb-4">
        {" "}
        Non hai trovato la risposta che cercavi?
      </p>
      <Button
        title="Invia un messaggio Whatsapp"
        className="bg-greenish text-white"
      />
    </div>
  );
};

export default Accordions;
