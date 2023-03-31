import React from "react";
import Teacher from "./Teach";

const Teachers = () => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Teacher
          name="Angelica Albertini"
          desc="Insegnante di Yoga e Meditazione"
          className="bg-[url('https://ik.imagekit.io/mauand/tr:w-500/matcha-studio/item2.jpg')] text-white"
        />
        <Teacher
          name="Angelica Albertini"
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
