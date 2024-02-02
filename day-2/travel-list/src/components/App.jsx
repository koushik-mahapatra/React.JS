import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>🌴far away💼</h1>
    </div>
  );
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");

  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault("");
    if (!description) return;
    const items = { description, quantity, packed: false, id: Date.now() };
    onAddItems(items);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} itemObj={item} />
        ))}
      </ul>
    </div>
  );
}
// id: 2, description: "Socks", quantity: 12, packed: false

function Item({ itemObj }) {
  return (
    <li>
      {itemObj.packed ? (
        <span>
          <input type="checkbox" />
        </span>
      ) : (
        <span>
          <input type="checkbox" />
        </span>
      )}
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>

      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <div className="stats">
      💼 You have x items on your list, and you already packed x (X%)
    </div>
  );
}
