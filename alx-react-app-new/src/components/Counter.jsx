import { useState } from "react";

function Counter() {
  // Initialize count state
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>Current Count: {count}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
        <button onClick={() => setCount(count + 1)} style={{ padding: "10px 15px" }}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} style={{ padding: "10px 15px" }}>
          Decrement
        </button>
        <button onClick={() => setCount(0)} style={{ padding: "10px 15px" }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
