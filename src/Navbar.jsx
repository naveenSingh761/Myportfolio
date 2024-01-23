import React, { memo } from "react";
import "./Typrwriter.css";
// import "./Typrwriter.js";
import TypeWriter from "./TypeWriter.jsx";
import {
  Link as MyLink,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Navbar = () => {
  const navitem = ["Skills", "About Me", "Contact ME"];
  const offset = [-100, -200, -150];
  return (
    <div className="myflex justify-around  pt-6 fixed top-0 left-0 w-full  bg-slate-900">
      <Link to="/" offset={10}>
        <TypeWriter>Naveen Singh</TypeWriter>
      </Link>
      <div className="w-[50%] hidden md:flex myflex justify-around text-fuchsia-500 ">
        {navitem.map((item, index) => (
          <>
            <Link to={item} offset={offset[index]}>
              <p className="text-[2rem] navlinkFont">{item}</p>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

const Link = ({ children, to, offset }) => {
  return (
    <MyLink
      activeClass="activeNavlink"
      to={to}
      spy={true}
      smooth={true}
      duration={2000}
      offset={offset}
    >
      {children}
    </MyLink>
  );
};

export default memo(Navbar);
