import Teacher from "./Teach";
import React from "react";

const Teachers = () => {
  return (
    <div className="px-4">
      <div className="flex flex-nowrap gap-4 overflow-x-scroll no-scrollbar cursor-grab unselectable rounded-xl">
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
