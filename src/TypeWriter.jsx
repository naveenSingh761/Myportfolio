import React from "react";

const TypeWriter = ({ children }) => {
  return (
    <div className="md:w-fit text-[1rem] md:text-[2rem] text-center text-wrap lg:text-pretty text-yellow-300 navheadFont typewriter-text ">
      <h1 className="typewriter">{children}</h1>
    </div>
  );
};

export default TypeWriter;
