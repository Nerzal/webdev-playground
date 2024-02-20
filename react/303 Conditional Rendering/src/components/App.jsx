import React from "react";

let isLoggedIn = true;

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      {isLoggedIn ? <p>You are logged in!</p> : 
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>}
      
    </div>
  );
}



export default App;
