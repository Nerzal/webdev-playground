import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js"

function App() {
  return (
    <div>
      <Header />
      {createNotes(notes)}
      <Footer />
    </div>
  );
}

function createNotes(notes) {
  return notes.map(note => Note(note));
}

export default App;
