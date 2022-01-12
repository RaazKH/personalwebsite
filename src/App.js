import './App.css';
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");

  return (
    <div className="App">
      <h1>Random Number Generator</h1>
      <h3>A number will be generated between 1 and the entered number. No Duplicates!</h3>
      <input type="number" value={number} onInput={(e) => setNumber(e.target.value)} />
      <p>{number}</p>
    </div>
  );
}

export default App;
