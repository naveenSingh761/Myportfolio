import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import {  setLoading,   resetLoading,   ,  } from './from';

import "./practice.css";
import { setLoading, resetLoading, setuser } from "../Store/reducer/userSlice";
const Practice = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Box1 />

      <button
        onClick={() => {
          dispatch(setLoading());
        }}
      >
        setLoading{" "}
      </button>
      <button
        onClick={() => {
          dispatch(resetLoading());
        }}
      >
        ResetLoading{" "}
      </button>
    </div>
  );
};

const Box1 = () => {
  return (
    <div>
      <h2>Box Compoent 1</h2>
      <Box2 />
    </div>
  );
};
const Box2 = () => {
  return (
    <div>
      <h2>Box Compoent 2</h2>
      <Box3 />
    </div>
  );
};
const Box3 = () => {
  const { loading, username } = useSelector(({ user }) => user);
  console.log("Box3 ~ username:", username);

  return (
    <div>
      <h2>Box Compoent 3</h2>
      {loading ? (
        <h2>Loading Status is True</h2>
      ) : (
        <h2>Loading Status is false</h2>
      )}
    </div>
  );
};
const Box4 = () => {
  return (
    <div>
      <h2>Box Compoent 4</h2>
    </div>
  );
};

export default Practice;
