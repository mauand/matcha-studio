import React from "react";

const Teacher = ({ name, desc, className }) => {
  //   const [popup, setPopup] = useState(false);

  //   const openPopup = () => {
  //     setPopup(!popup);
  //     const ref = useRef(null);
  //     ref.current.className = "trans-pop";
  //   };

  return (
    <>
      {/* {popup && (
        <div ref={modal} className="trans">
        <div 
        onClick={() => setPopup(false)}
        className="fixed top-0 left-0 min-h-screen w-screen bg-black opacity-40 z-10"></div>

        <div className="fixed right-0 top-0 h-screen w-1/2 bg-white z-20">
          <h1>{name}</h1>
        </div>
        </div>
      )} */}
      <div
        className={`rounded-xl text-center ${className} bg-center bg-cover`}
      >
        <div 
        className="w-96 max-w-[80vw] h-[30rem] py-8 px-6 rounded-xl flex flex-col justify-end items-center">
          <div className="backdrop-brightness-[.6]">
          <h5 className="title-shadow">{name}</h5>
          <p>{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;
