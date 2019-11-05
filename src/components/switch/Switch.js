import React from "react";
import classes from "./Switch.module.css";

const Switch = ({ on, onClick }) => {
  return (
    <input
      className={classes.Switch}
      type="range"
      min="0"
      max="1"
      value={on ? 1 : 0}
      onChange={onClick}
    />
  );
};

export default Switch;
