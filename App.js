import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function getCounterColor() {
    if (count >= 0 && count <= 4) {
      return "green";
    } else if (count >= 5 && count <= 9) {
      return "blue";
    } else {
      return "red";
    }
  }

  return (
    <div>
      <div>Counter App</div>
      <h1 style={{ color: getCounterColor() }}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
