import React from "react";
import emojipedia from "../emojipedia.js";
import Term from "./Term.jsx";

function createTerm(emoji) {
  return (
    <Term
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function createTerms(emojipedia) {
  return emojipedia.map((emoji) => createTerm(emoji));
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {createTerms(emojipedia)}
      </dl>
    </div>
  );
}

export default App;
