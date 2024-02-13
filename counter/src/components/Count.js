import { useState } from "react";

export function Count({ steps, setDate, dateHandler }) {
  const [count, setCount] = useState(0);

  function countHandler() {
    if (count < 0) setCount(0);
    return count;
  }

  function increment() {
    setCount((prev) => prev + steps);
    setDate(() => dateHandler(count));
  }

  function decrement() {
    setCount((prev) => prev - steps);
    setDate(() => dateHandler(count));
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <button onClick={decrement}>-</button>
      <p>Count : {countHandler()}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
