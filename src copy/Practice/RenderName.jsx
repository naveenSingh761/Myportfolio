import React, { memo, useEffect } from "react";

const RenderName = ({ prop: sayHello }) => {
  useEffect(() => {
    console.log(`File=>  RenderName.jsx => Line number: 4    `);
  });

  return (
    <div>
      <h1>i know Your Name: </h1>
      <button onClick={sayHello}>SayHello</button>

    </div>
  );
};



export default memo(RenderName);
