import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

// const getLocalStorage = () => {
//   let list = localStorage.getItem("list");
//   if (list) {
//     list = JSON.parse(localStorage.getItem("list"));
//   } else {
//     list = "[]";
//   }

//   return list;
// };

let defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (newItemName) => {
    const newItem = {
      name: newItemName,
      completed: false,
      id: nanoid(),
    };
    const newListItems = [...items, newItem];
    setItems(newListItems);
    setLocalStorage(newListItems);
  };

  const removeItem = (id) => {
    const newList = items.filter((i) => i.id !== id);

    setItems(newList);
    setLocalStorage(newList);
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };

        return newItem;
      }

      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
