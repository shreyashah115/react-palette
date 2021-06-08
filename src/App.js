import React from "react";
import "./css/App.css";
import Palette from "components/Palette";

const App = () => {
  const paletteData = [
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 255, b: 0 },
    { r: 0, g: 0, b: 255 },
  ];

  var debug = console.log.bind(window.console);
  debug("lets see");
  return (
    <main className="app">
      <Palette swatches={paletteData} />
    </main>
  );
};

// ReactDOM.render(<App />, document.getElementById(`root`));

export default App;
