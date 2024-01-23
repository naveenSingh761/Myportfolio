import React from "react";
import "./shaking.css";

const Button = ({ title, className ,name }) => {
  return (
    <span

    name={name}
      className={`border-2 text-yellow-200 rounded-md 
      
      shadow-[0.2rem_0.3rem_0.2rem_] shadow-slate-400
      sm:shadow-[2px_1px_5px_5px] sm:shadow-cyan-400

      border-cyan-500 p-2 px-6  ${className}`}
    >
      {title}
    </span>
  );
};

export default Button;
