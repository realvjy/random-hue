import React, { useEffect, useRef } from "react";

import "./App.css";
import copy from "copy-text-to-clipboard";

function App() {
  const copyHue = (event) => {
    const hue = event.data.pluginMessage;
    copy(hue);
  };
  // Exp with copy code
  useEffect(() => {
    // const copyHue = (event) => {
    //   const hue = event.data.pluginMessage;
    //   copy(hue);
    // };
    // window.addEventListener("message", copyHue);
    // return () => {
    //   window.removeEventListener("message", copyHue);
    // };
    console.log("ui");
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      Not in use yet
    </div>
  );
}

export default App;
