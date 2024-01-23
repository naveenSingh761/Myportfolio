import React from "react";
import "./helper.css";
import Text180 from "../Animation/Text180";

const ListTeck = () => {
  const TeckStack = [
    " MERN STACK",
    " React & React Native",
    " Redux & Redux Toolkit",
    " HTML 5",
    " CSS",
    " SCSS",
    " JavaScript",
    " BootStrap",
    " Material Ui",
    " ReactStrap",
    " Mysql DataBase",
  ];
  const stack =
    " MERN_STACK  React  React_Native  Redux  ReduxToolkit  HTML5  CSS  SCSS  JavaScript Typescript BootStrap  MaterialUi  ReactStrap Git Github  MySQL MongoDB DataBase ";
  return (
    <>
      <div
        name="Skills"
        className="myflex md:mb-5 flex-col w-full md:text-[1.5rem]
      mb-4
      "
      >
        <Text180>
          <p className="text-[2rem]">Tech Stack</p>
        </Text180>
        <div className="w-[10VW] border-b-[3px] border-yellow-200"></div>
      </div>

      <div class="marquee-w w-full text-[14px]  md:text-[1.5rem] myflex">
        <div class="marquee ">
          <span className="text-cyan-400">{stack}&nbsp; </span>
        </div>
        <div class="marquee marquee2">
          <span className="text-cyan-400">{stack}&nbsp;</span>
        </div>
      </div>
    </>
  );
};

export default ListTeck;
