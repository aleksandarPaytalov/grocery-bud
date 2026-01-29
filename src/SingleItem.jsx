import { useState } from "react";

const SingleItem = ({ item, removeItem }) => {
  const { id, name, completed } = item;
  const [isChecked, setIsChecked] = useState(completed);

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isChecked && "line-through",
        }}
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        type="button "
        onClick={() => removeItem(id)}
      >
        Remove
      </button>
    </div>
  );
};
export default SingleItem;
