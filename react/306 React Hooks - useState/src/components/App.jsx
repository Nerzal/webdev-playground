import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  function increment() {
    setValue(value + 1);
    console.log(value);
  }

  function decrement() {
    setValue(value -1);
    console.log(value);
  }
  
  return (
    <div className="container">
      <h1>{value}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
