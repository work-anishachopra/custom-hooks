import React from "react";
import useCounter from "../hooks/useCounter";

const DemoUseCounter = () => {
  const {
    count,
    inc: increment,
    dec: decrement,
    reset,
  } = useCounter({ initVal: 0, step: 10 });
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Custom Hook: useCounter Demo</h2>
      <h3>Count: {count}</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default DemoUseCounter;
