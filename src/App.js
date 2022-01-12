import './App.css';
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("10");

  const [display, setDisplay] = useState("1");

  const [disabled, setDisabled] = useState(false);
  const [randomNumber, setRandomNumber] = useState("");

  const [numArray, setNumArray] = useState([]);

  const indexOf = (i) => {
    var index = 0;
    while (index < numArray.length) {
      if (numArray[index] === i) {
        return index;
      }
      index++;
    }
    return -1;
  }

  const submit = () => {
    setDisabled(!disabled);
    setDisplay(number);

    var fruits = [];
    var i = number;

    while (i > 0) { fruits.push(i--); }

    setNumArray(fruits);
    console.log(numArray);
  };

  const generate = () => {
    var found = false;
    while (!found && numArray.length > 0) {
      var i = 1 + Math.floor(Math.random() * display);
      if (indexOf(i) > -1) {
        setRandomNumber(i);
        setNumArray(numArray.filter(item => item !== i));
        found = true;
      }
    }
    if (!(numArray.length > 0)) { setRandomNumber("Good job! Hit Reset to start over"); }
  };

  return (
    <div className="App">
      <h1>Random Number Generator</h1>
      <h3>A number will be generated between 1 and the entered number. No Duplicates!</h3>
      <input type="number" disabled={disabled} value={number} onInput={(e) => setNumber(e.target.value)} />
      <button onClick={submit}>{disabled ? "Reset" : "Submit"}</button>
      <p>Between 1 and {display}</p>
      <button onClick={generate}>Generate!</button>
      <h3>{randomNumber}</h3>
    </div>
  );
}

export default App;
