import React, { useState } from "react";

function App() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  function mouseEnter() {
    setIsMouseOver(true);
  }

  function mouseLeave() {
    setIsMouseOver(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
