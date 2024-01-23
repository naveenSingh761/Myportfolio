import React from "react";
import { useSpring, animated } from "react-spring";

const BottomSection = () => {
  const spring = useSpring({
    from: {
      transform: " rotateX(180deg) translate(500px)",
    },
    to: {
      transform: "  rotateX(0)  translate(100px)",
    },
    config: { duration: 1000 },
  });
  return (
    <div className=" h-[50vh] p-5 flex flex-col justify-around ">
      <animated.div style={spring} className="w-[20vw] h-[5rem] border-[5px]  ">
        Hey
      </animated.div>
      <div className="w-[20vw] h-[5rem] border-[5px]  "></div>
    </div>
  );
};

export default BottomSection;
