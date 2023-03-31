import React, { useRef } from "react";
import Teacher from "./Teach";
import { useDraggable } from "react-use-draggable-scroll";


const Teachers = () => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);
  return (
    <div className="px-4">
      <div
        ref={ref}
        {...events}
        className="flex flex-nowrap gap-4 overflow-x-scroll no-scrollbar cursor-grab unselectable"
      >
        <Teacher
          name="Angelica Albertini"
          desc="Insegnante di Yoga e Meditazione"
          className="bg-[url('https://ik.imagekit.io/mauand/tr:w-500/matcha-studio/item2.jpg')] text-white"
        />
        <Teacher
          name="Francesca"
          desc="Insegnante di Yoga e Meditazione"
          className="bg-[url('https://ik.imagekit.io/mauand/tr:w-500/matcha-studio/item2.jpg')] text-white"
        />
        <Teacher
          name="Angelica Albertini"
          desc="Insegnante di Yoga e Meditazione"
          className="bg-[url('https://ik.imagekit.io/mauand/tr:w-500/matcha-studio/item2.jpg')] text-white"
        />
      </div>
    </div>
  );
};

export default Teachers;
