import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function onNameChanged(e){
    setName(e.target.value);    
    console.log(e.target.value);
  }

  function onClick(){
    setSubmittedName(name);
  }

  return (
    <div className="container">
      <h1>Hello {submittedName}</h1>
      <input type="text" onChange={onNameChanged} placeholder="What's your name?" value={name}/>
      <button onClick={onClick}>Submit</button>
    </div>
  );
}

export default App;
