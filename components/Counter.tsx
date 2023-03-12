import { useState } from "react";
import { Button } from "./Counter.css";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{`Count: ${count}`}</p>

      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </>
  );
}
