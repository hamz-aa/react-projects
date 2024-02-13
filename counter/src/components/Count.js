import { useState } from "react";

export function Count({ steps, setDate, dateHandler }) {
  const [count, setCount] = useState(0);

  function countHandler() {
    if (count < 0) setCount(0);
    console.log(steps);
    return count;
  }

  function increment() {
    setCount((prev) => prev + steps);
    countHandler();
    setDate(() => dateHandler(count + 1));
  }

  function decrement() {
    setCount((prev) => {
      console.log(prev);
      return prev - steps;
    });
    if (count < 0) console.log(count, "==> count");
    setDate(() => dateHandler(count - 1));
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
