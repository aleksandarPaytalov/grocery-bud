import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItemName) => {
    const newItem = {
      name: newItemName,
      completed: false,
      id: nanoid(),
    };

    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    const newList = items.filter((i) => i.id !== id);

    setItems(newList);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
};

export default App;
