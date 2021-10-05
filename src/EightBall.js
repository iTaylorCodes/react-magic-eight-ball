import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const randIndx = Math.floor(Math.random() * answers.length);

  function handleClick() {
    const { msg, color } = answers[randIndx];
    setMsg(msg);
    setColor(color);
  }

  return (
    <div className="EightBall" onClick={handleClick} style={{ backgroundColor: color }}>
      <p className="EightBall-msg">{msg}</p>
    </div>
  );
};

export default EightBall;
