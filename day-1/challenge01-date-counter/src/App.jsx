import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <Counter2 />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(step);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <h2 style={{ color: "#d43dac" }}>Date Counter Version : 1</h2>
      <div>
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <span>Steps : {step}</span>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is: "
            : count > 0
            ? `${count} days from now will: `
            : `${Math.abs(count)} days ago was: `}
        </span>
        <span style={{ color: "#9927db" }}>{date.toDateString()}</span>
      </p>
    </div>
  );
}

function Counter2() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  function handleReset() {
    setStep(1);
    setCount(0);
  }
  return (
    <div>
      <h2 style={{ color: "#d43d72" }}>Date Counter Version : 2</h2>

      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> Steps: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is: "
            : count > 0
            ? `${count} days from today will: `
            : `${Math.abs(count)} days ago was: `}
        </span>
        <span style={{ color: "#15d646" }}>{date.toDateString()}</span>
      </p>
      <div>
        {step !== 1 || count !== 0 ? (
          <button onClick={handleReset}>Reset</button>
        ) : null}
      </div>
    </div>
  );
}
