import Item from "./Item";

export default function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        <Item items={items} />
      </ul>
    </div>
  );
}
