import React from "react";
import { RiGhostSmileLine } from "react-icons/ri";
import Button from "./Button.jsx";

const AboutMe = () => {
  return (
    <div className=" w-[100%] min-h-[100vh] myflex mb-5">
      <div className="w-[80%] text-center mx-auto sm:my-10">
        <Button title={"About Me"} className="shaking" name="About Me" />
        <div className="mt-6">
          <div className="myflex ">
            <p className="text-orange-500 mr-2">Hello there!</p>
            <RiGhostSmileLine
              size={25}
              color={"rgb(249 115 22 )"}
              className=""
            />
          </div>
          <br />
          <p className="text-slate-400  text-[1rem] md:text-[1.5rem]">
            I'm a skilled web developer well-versed in website development and
            management. My expertise lies in crafting clean, maintainable code
            within a team environment. presently I'm working as a freelancer ,I
            have good command over React including redux and redux toolkit state
            management, and I have crafted skills with the use of modern UI
            framework like MUI, BOOTSTRAP, and REACTSTRAP ,Tailwind Css along
            with HTML5 ,CSS SCSS , VANILLA JS , JAVASCRIPT, TypeScript, Es6+.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
