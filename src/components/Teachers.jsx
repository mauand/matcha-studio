import Teacher from "./Teach";
import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";

const Teachers = () => {

  return (
      <ScrollContainer>
        <div className="flex flex-nowrap gap-4 unselectable rounded-xl">
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
      </ScrollContainer>
  );
};

export default Teachers;
