import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function submit() {
    setUser(user);
  }

  function onFirstNameChanged(event) {
    setUser({ ...user, firstName: event.target.value });
  }

  function onLastNameChanged(event) {
    setUser({ ...user, lastName: event.target.value });
  }

  function onEmailChanged(event) {
    setUser({ ...user, email: event.target.value });
  }

  return (
    <div className="container">
      <h1>
        Hello {user.firstName} {user.lastName}{" "}
      </h1>
      <form onSubmit={submit}>
        <input
          name="fName"
          placeholder="First Name"
          value={user.firstName}
          onChange={onFirstNameChanged}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={user.lastName}
          onChange={onLastNameChanged}
        />
        <input
          name="email"
          placeholder="E-Mail"
          value={user.email}
          onChange={onEmailChanged}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
