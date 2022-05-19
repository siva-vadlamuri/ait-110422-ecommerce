import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count :{count}</p>
      <button className="btn btn-info">Increment</button>
      <button className="btn btn-info">Decrement</button>
    </div>
  );
}

export default Counter;
