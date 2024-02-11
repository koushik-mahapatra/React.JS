import { useState } from "react";

export default function Form({ items }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { quantity, description, id: Date.now(), packed: false };
    onAddItems(newItem);
    setQuantity(1);
    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>What do you need for your 😍trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}
