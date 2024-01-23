import React from "react";
import { useSpring, useSprings, animated, useScroll } from "react-spring";

const Middlesection = () => {
  //   console.log(window.screen.width);
  const TeckStack = [
    "MERN STACK",
    " React & React Native",
    " Redux & Redux Toolkit",
    " HTML 5",
    " CSS",
    " SCSS",
    " JavaScript",
    " TypeScript",
    " BootStrap",
    " Material Ui",
    " ReactStrap",
    " Mysql_DataBase",
    " MongoDb_DataBase",
  ];

  const [spring, api] = useSpring(() => ({
    from: { transform: "translate(-100%)", opacity: 0 },
    to: { transform: "translate(0%)", opacity: 1 },
    config: { duration: 1000 },
  }));

  const [springs2, api2] = useSprings(10, () => ({
    from: { x: 0 },
    to: { x: 100 },
  }));

  return (
    <>
      <animated.div
        style={spring}
        className=" w-[90%]  sm:w-[50%] mt-[5rem] mx-auto text-center border-[0.1rem] border-slate-600 "
      >
        <p className="text-yellow-300 text-[3rem]">Tech Stack</p>
        <div className="mx-auto w-[30%] border-[1px] border-b-solid border-pink-400 rounded-lg "></div>
        <div className="grid grid-cols-3 place-items-center" >
          {TeckStack.map((item, index) => {
            return <p className="text-cyan-400 text-[1.5rem]">{item}</p>;
          })}
        </div>
      </animated.div>
    </>
  );
};

export default Middlesection;
