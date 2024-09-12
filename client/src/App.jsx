import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(2.3);

  return (
    <>
      <div>
        <button onClick={() => setCount(count * 2)}>Click me {count}</button>
      </div>
    </>
  );
}

export default App;
