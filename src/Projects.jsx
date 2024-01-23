import React from "react";
import TypeWriter from "./TypeWriter";
import ScrollAnimation from "./ScrollAnimation.jsx";

import Button from "./Button.jsx";

const Projects = () => {
  return (
    <div className="w-[100%] min-h-[100vh]">
      <div className="text-center mb-[10rem]    ">
        <a href={import.meta.env.VITE_MyGithub}>
          <Button title={"Major projects"} />
        </a>
      </div>
      <div className="w-full h-full  grid grid-cols-1 sm:grid-cols-2 gap-2 place-items-center ">
        <div className=" w-[80%] myflex flex-col  ">
          <ScrollAnimation
            heading={"  Ecommerce Website Development"}
            subheading={" Teck Stack Used"}
          >
            <p className="text-[1rem] sm:text-[1.5rem] text-center mt-5 font-comicFontpara ">
              React Redux ReduxToolkit HTML5 SCSS JavaScript BootStrap
              MaterialUi ReactStrap
            </p>
            <p className="text-[1rem] sm:text-[1.5rem]">
              Nodejs Express MongoDB
            </p>
          </ScrollAnimation>
        </div>
        <div className=" w-[80%] myflex flex-col ">
          <ScrollAnimation
            heading={"  Library Management System"}
            subheading={" Teck Stack Used"}
          >
            <p className="text-[1rem] sm:text-[1.5rem] mt-5 font-comicFontpara">
              React Redux ReduxToolkit HTML5 SCSS JavaScript BootStrap
              MaterialUi ReactStrap
            </p>
            <p className="text-[1rem] sm:text-[1.5rem]">
              Nodejs Express MongoDB
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Projects;
