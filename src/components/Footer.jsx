import * as te from "tw-elements";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-secondary-100 text-center">
      {/* <div className="px-6 pt-6">
        <form action="">
          <div className="flex flex-col gap-6">
            <div className="md:ml-auto md:mb-6">
              <p className="text-secondary-800">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>

            <div className="relative md:mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded-md border-0 bg-white py-4 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput1"
                placeholder="Email address"
              />
              <label
                for="exampleFormControlInput1"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-secondary-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >
                Email address
              </label>
            </div>

            <div className="mb-6 md:mr-auto">
              <Button title="Iscriviti"/>
            </div>
          </div>
        </form>
      </div> */}

      <div className="bg-secondary-200 flex gap-1 justify-center p-4 text-center text-secondary-700">
        © 2023 Copyright:
        <p className="text-secondary-800">Matcha Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
