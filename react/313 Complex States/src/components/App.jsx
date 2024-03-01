import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  function submit(){
    setUser(user); 
  }

  function onFirstNameChanged(event){
    setUser({...user, firstName: event.target.value});
  }

  function onLastNameChanged(event){
    setUser({...user, lastName: event.target.value});
  }


  return (
    <div className="container">
      <h1>Hello {user.firstName} {user.lastName} </h1>
      <form onSubmit={submit}>
        <input name="fName" placeholder="First Name" value={user.firstName} onChange={onFirstNameChanged}/>
        <input name="lName" placeholder="Last Name" value={user.lastName} onChange={onLastNameChanged}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
