import React from "react";
import Swatch from "./Swatch";

const Palette = ({ swatches }) => {
  const allSwatches = swatches.map(({ r, g, b }, index) => (
    <Swatch key={index} red={r} green={g} blue={b} />
  ));
  return (
    <ul className="palette">
      {/* <Swatch red={255} green={0} blue={0} />
      <Swatch red={0} green={255} blue={0} />
      <Swatch red={0} green={0} blue={255} /> */}

      {allSwatches}
    </ul>
  );
};

export default Palette;
