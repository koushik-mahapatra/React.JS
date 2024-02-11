export default function Item({ items }) {
  return (
    <li>
      <input type="checkbox" />
      <span>
        {items.quantity}
        {items.description}
      </span>
    </li>
  );
}
