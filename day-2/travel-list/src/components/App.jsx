import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form items={items} />
      <PackingList items={items} />
    </div>
  );
}
