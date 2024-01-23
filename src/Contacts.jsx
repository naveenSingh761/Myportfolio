import React from "react";
import Button from "./Button";

const Contacts = () => {
  return (
    <div className="mt-1 flex flex-col justify-around items-center min-h-[80vh]">
      <Button title={"Contact Me"} name={"Contact ME"} />
      <input
        type="text"
        placeholder="Whats your good name! 😊"
        className="w-[90vw]
          focus:border-fuchsia-600
        
        placeholder:font-comicFontpara placeholder:text-[1.3rem]  text-green-500 font-comicFontHea font-bold  tracking-[1.5px] bg-transparent border-b-2 focus:text-orange-600 text-[1rem] focus:text-[1.2rem] border-blue-400  outline-none  rounded-[1rem] p-1 px-4  h-[2.5rem]  md:w-[50vw] "
      />
      <input
        type="email"
        placeholder="@gmail.com"
        className="w-[90vw]
          focus:border-fuchsia-600
        
        placeholder:font-comicFontpara placeholder:text-[1.3rem]  text-green-500 font-comicFontHea font-bold  tracking-[1.5px] bg-transparent border-b-2 focus:text-orange-600 text-[1rem] focus:text-[1.2rem] border-blue-400  outline-none  rounded-[1rem] p-1 px-4 h-[2.5rem]   md:w-[50vw] "
      />
      <input
        type="text"
        placeholder="Subject: Hiring/Need Help/For Projects"
        className="w-[90vw]
          focus:border-fuchsia-600
        
        placeholder:font-comicFontpara placeholder:text-[1.3rem]  text-green-500 font-comicFontHea font-bold  tracking-[1.5px] bg-transparent border-b-2 focus:text-orange-600 text-[1rem] focus:text-[1.2rem] border-blue-400  outline-none  rounded-[1rem] p-1 px-4  h-[2.5rem]  md:w-[50vw] "
      />
      <textarea
        type="text"
        placeholder="Message"
        className="w-[90vw]
          focus:border-fuchsia-600
        
        placeholder:font-comicFontpara placeholder:text-[1.3rem]  text-green-500 font-comicFontHea font-bold  tracking-[1.5px] bg-transparent border-b-2 focus:text-orange-600 text-[1rem] focus:text-[1.2rem] border-blue-400  outline-none  rounded-[1rem] p-1 px-4    md:w-[50vw] "
        rows="4"
      />

      <button className="w-[90vw] text-cyan-300 bg-purple-500 hover:bg-indigo-400 hover:text-orange-900 md:tracking-[1.5rem] uppercase font-bold h-[2.5rem]  md:w-[50vw] rounded-3xl">
        {" "}
        Submit
      </button>
    </div>
  );
};

export default Contacts;
