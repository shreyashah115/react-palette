import React, { useState } from "react";
import Channel from "./Channel";

const Swatch = ({ red, green, blue }) => {
  // const [redColor, setRed] = React.useState(red);
  // const [greenColor, setGreen] = React.useState(green);
  // const [blueColor, setBlue] = React.useState(blue);

  const [r, setR] = useState(red);
  const [g, setG] = useState(green);
  const [b, setB] = useState(blue);

  // Define a background-color for the swatch
  const myStyles = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };

  // Render
  return (
    <li className="swatch" style={myStyles}>
      <Channel rgb={r} click={setR} />
      <Channel rgb={g} click={setG} />
      <Channel rgb={b} click={setB} />
      <div>);</div>
    </li>
  );
};

export default Swatch;
