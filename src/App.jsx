import React from "react";
import Topsection from "./Topsection.jsx";
import Middlesection from "./Middlesection.jsx";
import ListTeck from "./ List/ListTeck.jsx";
import BottomSection from "./BottomSection.jsx";
import Text180 from "./Animation/Text180.jsx";
import Navbar from "./Navbar.jsx";
import Projects from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import Contacts from "./Contacts.jsx";

const App = () => {
  return (
    <>
      <div className="w-100% min-h-[100vh] h-fit bg-slate-900 ">
        <Navbar />
        <Topsection />
        <ListTeck />
        <Middlesection />
        <AboutMe />
        <Projects />
        <Contacts />
      </div>
    </>
  );
};

export default App;
