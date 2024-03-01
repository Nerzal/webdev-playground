import React, { useState } from "react";

export default function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function onTitleChanged(event) {
    setNote({ ...note, title: event.target.value });
  }

  function onContentChanged(event) {
    setNote({ ...note, content: event.target.value });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onAdd(note);
        }}
      >
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={onTitleChanged}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={onContentChanged}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
