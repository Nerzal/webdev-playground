import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App() {
  const [items, setItems] = useState([]);

  function addItem({ title, content }) {
    console.log(title, content);
    setItems((prevItems) => {
      return [...prevItems, { title, content }];
    });
  }

  function deleteItem(id) {
    console.log(id);
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      <ul>
        {items.map((todoItem, index) => (
          <Note
            id={index}
            key={index}
            title={todoItem.title}
            content={todoItem.content}
            onDelete={deleteItem}
          />
        ))}
      </ul>
      <Footer />
    </div>
  );
}
