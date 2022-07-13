import React, { useEffect } from "react";

import "./App.css";
import { harmonies } from "prismaek";
import { getColorName, initColors, ORIGINAL_COLORS } from "ntc-ts";
initColors(ORIGINAL_COLORS);

function App() {
  useEffect(() => {
    onmessage = (event) => {
      const color01 = getColorName("#9399A7");
      if (event.data.pluginMessage.type === "color-scheme") {
        const hsv = { h: 153, s: 0.737, v: 0.596 };
        parent.postMessage({ pluginMessage: color01 }, "*");
      }
    };
  });

  return (
    <div className="App">
      <h1>Hello</h1>
      <button
        onClick={() => {
          parent?.postMessage?.({ pluginMessage: "close" }, "*");
        }}
      >
        Close
      </button>
    </div>
  );
}

export default App;
