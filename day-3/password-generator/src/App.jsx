import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  return (
    <div className=" flex h-screen flex-col items-center  bg-slate-700 p-8">
      <h1 className="text-2xl text-white">Password Generator</h1>
      <Password />
    </div>
  );
}

function Password() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += " !@#$%^&*()_+{}[]|:;'<>,.?/ ";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    console.log(window.navigator.clipboard);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, setPassword, passwordGenerator]);
  return (
    <div className="mt-4 rounded-md bg-gray-600 p-3 text-orange-500 shadow-md ">
      <div className="flex w-full rounded-md">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className="w-full rounded-l-md px-2 outline-none"
        />
        <button
          onClick={copyToClipboard}
          className="rounded-r-md bg-blue-900 px-2 py-0.5 text-white"
        >
          copy
        </button>
      </div>
      <div className="mt-2 flex items-center gap-1">
        <input
          type="range"
          value={length}
          min={1}
          max={20}
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="">Length({length})</label>

        <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="checkbox"
          onChange={() => setNumAllowed((prev) => !prev)}
        />
        <label htmlFor="checkbox">Numbers</label>

        <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
          id="characters"
        />
        <label htmlFor="characters">Characters</label>
      </div>
    </div>
  );
}

export default App;
