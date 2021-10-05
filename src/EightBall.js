import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const randIndx = Math.floor(Math.random() * answers.length);

  const [redCounter, setRedCounter] = useState(0);
  const [greenCounter, setGreenCounter] = useState(0);
  const [goldenrodCounter, setGoldenrodCounter] = useState(0);

  function handleClick() {
    const { msg, color } = answers[randIndx];
    setMsg(msg);
    setColor(color);
    if (color === "red") setRedCounter(redCounter + 1);
    if (color === "green") setGreenCounter(greenCounter + 1);
    if (color === "goldenrod") setGoldenrodCounter(goldenrodCounter + 1);
  }

  function reset() {
    setMsg("Think of a Question");
    setColor("black");
    setRedCounter(0);
    setGreenCounter(0);
    setGoldenrodCounter(0);
  }

  return (
    <>
      <div className="EightBall" onClick={handleClick} style={{ backgroundColor: color }}>
        <p className="EightBall-msg">{msg}</p>
      </div>
      <button className="EightBall-reset-btn" onClick={reset}>
        Reset
      </button>
      <div className="EightBall-counter-container">
        <div className="EightBall-counter" style={{ color: "red" }}>
          Red Count: <span style={{ fontWeight: 700 }}>{redCounter}</span>
        </div>
        <div className="EightBall-counter" style={{ color: "green" }}>
          Green Count: <span style={{ fontWeight: 700 }}>{greenCounter}</span>
        </div>
        <div className="EightBall-counter" style={{ color: "goldenrod" }}>
          Goldenrod Count: <span style={{ fontWeight: 700 }}>{goldenrodCounter}</span>
        </div>
      </div>
    </>
  );
};

export default EightBall;
