import { useState } from "react";
import Form from "./Form";

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <section className="section-center">
      <Form items={items} />
    </section>
  );
};

export default App;
