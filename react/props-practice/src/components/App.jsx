import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Card
        name={contacts[0].name}
        imgSource={contacts[0].imgURL}
        imgAlt="avatar_img"
        phone={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        imgSource={contacts[1].imgURL}
        imgAlt="avatar_img"
        phone={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        imgSource={contacts[2].imgURL}
        imgAlt="avatar_img"
        phone={contacts[2].phone}
        email={contacts[2].email}
      />

      <Card
        name="Olaf Scholz"
        imgSource={contacts[2].imgURL}
        imgAlt="avatar_img"
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
