///// Date Counter V-1 /////

// import { useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const date = new Date("february 01 2024");
//   const [step, setStep] = useState(0);
//   const [count, setCount] = useState(step);

//   date.setDate(date.getDate() + count);
//   return (
//     <div>
//       <div>
//         <button onClick={() => setStep((s) => s - 1)}>-</button>
//         <span>Step:{step} </span>
//         <button onClick={() => setStep((s) => s + 1)}>+</button>
//       </div>

//       <div>
//         <button onClick={() => setCount((c) => c - step)}>-</button>
//         <span>Count:{count} </span>
//         <button onClick={() => setCount((c) => c + step)}>+</button>
//       </div>

//       <p>
//         <span>
//           {count === 0
//             ? "Today is "
//             : count > 0
//             ? `${count} days from today will `
//             : `${Math.abs(count)} days ago was `}
//         </span>
//         <span>{date.toDateString()}</span>
//       </p>
//     </div>
//   );
// }

// export default App;

/// Date Counter V-2 ///

import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }
  return (
    <div className="App">
      <div>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
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
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today will `
          : `${Math.abs(count)} days ago was `}
        <span>{date.toDateString()}</span>
      </p>
      <div>
        {count !== 0 || step !== 1 ? (
          <button onClick={handleReset}>Reset</button>
        ) : null}
      </div>
    </div>
  );
}
