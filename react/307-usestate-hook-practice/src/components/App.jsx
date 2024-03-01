import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("TIME");

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(() => {
    updateTime();
  }, 1);

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
