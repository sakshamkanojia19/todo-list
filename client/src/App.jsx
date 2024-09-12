import { useState } from "react";

import "./App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  const [count, setCount] = useState(2.3);

  return (
    <>
    <Navbar/>
      <div>
        <button onClick={() => setCount(count * 2)}>Click me {count}</button>
      </div>

      <Footer/>
    </>
  );
}

export default App;
