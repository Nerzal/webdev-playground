import React, { useState } from "react";

export default function App() {
  const [time, setTime] = useState<string>("TIME");

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
