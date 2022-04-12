import React, { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>{count}</h1>

      <Button onClick={increment} variant="outlined" size="medium">
        +
      </Button>

      <Button onClick={decrement} variant="outlined" size="medium">
        -
      </Button>
    </>
  );

  function increment(): void {
    setCount((count) => count + 1);
  }

  function decrement(): void {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  }
}

export default App;
