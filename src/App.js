import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: textfield;
  margin: 0;
  height: 50%;
  width: 20px;
`;
const StyledButton = styled.button`
  height: 50%;
  margin-left: 5px;
`;

function App() {
  const [number, setNumber] = useState("1");

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
    <Container>
      <h1>Random Number Generator</h1>
      <h3>No Duplicates!</h3>
      <FlexContainer>
        <p>Between 1 and&nbsp;</p>
        <StyledInput type="number" disabled={disabled} value={number} onInput={(e) => setNumber(e.target.value)} />
        <StyledButton onClick={submit}>{disabled ? "Reset" : "Submit"}</StyledButton>
      </FlexContainer>
      <button onClick={generate}>Generate!</button>
      <h2>{randomNumber}</h2>
    </Container>
  );
}

export default App;
