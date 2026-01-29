import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";

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

  return (
    <section className="section-center">
      <Form addItem={addItem} />
    </section>
  );
};

export default App;
