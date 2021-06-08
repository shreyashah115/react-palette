import React from "react";

const Channel = ({ rgb, click }) => {
  const updateRgb = (channel) => {
    console.log(channel);
    {
      255 < channel == channel < 0 && click(channel);
    }
  };

  return (
    <div className="channel">
      <button
        type="button"
        className="btn up"
        onClick={() => updateRgb(rgb + 1)}
      >
        +
      </button>
      <input
        type="text"
        className="txt"
        value={rgb}
        onChange={({ target }) => updateRgb(Number(target.value))}
      />
      <button
        type="button"
        className="btn down"
        onClick={() => updateRgb(rgb - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Channel;
