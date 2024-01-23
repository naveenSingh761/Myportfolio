import React from "react";
import { useSpring, useSprings, animated, useScroll } from "react-spring";
import TypeWriter from "./TypeWriter";
const ScrollAnimation = ({ heading, subheading, children }) => {
  //   console.log(window.screen.width);

  const [spring, api] = useSpring(() => ({
    from: { transform: "translate(-100%)", opacity: 0 },
    to: { transform: "translate(0%)", opacity: 1 },
    config: { duration: 1000 },
  }));

  const { scrollYProgress } = useScroll();

  return (
    <div className="myproject">
      <animated.div
        style={{ ...spring, opacity: scrollYProgress }}
        className=" w-full  mt-[1rem] mx-auto text-center border-[0.1rem] border-slate-600 py-6 "
      >
        <div className="myflex text-[0.8rem] ">
          <TypeWriter>{heading}</TypeWriter>
        </div>
        <p className="text-orange-600 text-[1rem] truncate">{subheading}</p>
        <div className="mx-auto w-[50%] border-[1px] border-b-solid border-pink-400 rounded-lg "></div>

        <animated.div
          style={{ opacity: scrollYProgress }}
          className="text-warp"
        >
          <p className="text-cyan-400 ">{children}</p>
        </animated.div>
      </animated.div>
    </div>
  );
};

export default ScrollAnimation;
