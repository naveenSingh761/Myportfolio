import React from "react";
import { useSpring, animated } from "react-spring";

const Text180 = ({ children }) => {
  console.log("Text180 ~ children:", children);
  const spring = useSpring({
    from: {
      transform: "rotateZ(180deg) translate(-150%)",
    },
    to: {
      transform: "rotateZ(0) translate(0%)",
    },
    config: { duration: 800 },
  });
  return (
    <div className="flex flex-col justify-around items-center sm:items-start ">
      <animated.div
        style={spring}
        className="w-fit bg-clip-text text-transparent mytextstyle "
      >
        {children}
      </animated.div>
    </div>
  );
};

export default Text180;
