import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      imgSource={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

// createContacts creates a set of Contact Cards
function createContacts(contacts) {
  return contacts.map((contact) => createCard(contact));
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {createContacts(contacts)}
    </div>
  );
}

export default App;
