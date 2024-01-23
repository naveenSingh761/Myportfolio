import React from "react";
import { useSpring, animated } from "react-spring";
import Text180 from "./Animation/Text180";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
const Topsection = () => {
  const [spring, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 3000 },
  }));
  console.log("const[spring,api]=useSpring ~ spring:", spring);
  const [spring2, api2] = useSpring(() => ({
    from: { transform: "rotate(180deg)", opacity: 0 },
    to: { transform: "rotate(0deg)  ", opacity: 1 },
    config: { duration: 500 },
  }));

  return (
    <div
      name="/"
      className="w-100% h-[50vh] sm:h-[100vh]  md:px-[5rem] flex  flex-col-reverse justify-center items-center  sm:flex-row  sm:justify-between"
    >
      <div className="mt-6 flex flex-col item-center w-full sm:text-[3rem]">
        <Text180>
          <p>Naveen Singh</p>
          <p>Freelancer</p>
        </Text180>
        <a
          href={import.meta.env.VITE_MYResume}
          target="new"
          className="myflex self-center sm:self-start  md:ms-10 mt-2 "
        >
          <span className="text-slate-200 text-[10px]">Resume</span>
          <IoDocumentAttachOutline
            color={"purple"}
            className="text-[2.5rem] "
          />
        </a>

        <div className="myflex mt-2  ">
          <a href={import.meta.env.VITE_LinkeDin} target="new" id="clickable1">
            <CiLinkedin
              color={"Cyan"}
              className="mx-2 sm:mx-5 text-[2.5rem]  "
            />
          </a>
          <Tooltip
            anchorSelect="#clickable1"
            clickable
            place="left-start"
            className="mytooltip"
          >
            Linkedin
          </Tooltip>

          <a href={import.meta.env.VITE_MyGithub} id="clickable" target="new">
            <FaGithub color={"purple"} className="text-[2.5rem]  " />
          </a>
          <Tooltip
            anchorSelect="#clickable"
            clickable
            place="right-start"
            className="mytooltip"
          >
            My github
          </Tooltip>
        </div>
      </div>

      <animated.div
        style={spring}
        className="myflex w-[50vmin]  sm:w-[60vmin]   aspect-square  overflow-hidden rounded-[80rem]  myborder
         shadow-[0.5rem_0.5rem_0.2rem_] shadow-slate-500
         sm:shadow-[0.5rem_10px_50px_10px] sm:shadow-cyan-400
        "
      >
        <img
          src="./src/assets/trial.jpg"
          alt="image.jpg"
          className="    w-[100%]  sm:w-[100%]  aspect-square   object-fill  rounded-[50rem] 
            transition-all duration-[800ms]  
              hover:scale-[1.2]
              "
        />
      </animated.div>
    </div>
  );
};

export default Topsection;
