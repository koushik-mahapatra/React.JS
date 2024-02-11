import React, { useState } from "react";

const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "cyan",
  "magenta",
];

function App() {
  const [backgroundColor, setBackgroundColor] = useState("black");

  const handleColorChange = (newColor) => {
    setBackgroundColor(newColor);
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="fixed bottom-10 flex flex-wrap gap-3 rounded-2xl bg-transparent px-4 py-2">
        {colors.map((color) => (
          <ColorButton
            key={color}
            color={color}
            onClick={() => handleColorChange(color)}
          />
        ))}
      </div>
    </div>
  );
}

const ColorButton = ({ color, onClick }) => (
  <button
    className="rounded-full border px-4 py-2 text-xl text-white outline-none "
    style={{ backgroundColor: color }}
    onClick={onClick}
  >
    click
  </button>
);

export default App;
