import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          // setCount(count + 1);
          // setCount(count + 1);
          // setCount(count + 1);
          setCount((cur) => cur + 1);
          setCount((cur) => cur + 1);
          setCount((cur) => cur + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
    </>
  );
}

export default App;
