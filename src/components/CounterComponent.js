import { useState } from "react";

export default function CounterComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(prev => prev + 1)
  return (
    <>
      <h3 data-testid="count">count: {count}</h3>
      <button onClick={handleClick}>Increment</button>
    </>
  )

}