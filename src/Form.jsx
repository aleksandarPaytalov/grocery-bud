import { useState } from "react";

const Form = ({ items }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery list</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn" type="submit">
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
