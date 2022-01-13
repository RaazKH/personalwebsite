import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(2,0,36);
  background: linear-gradient(157deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(5,6,45,1) 100%); 
  color: white;
  height: 100%;
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
  width: 20px;
`;

const StyledButton = styled.button`
  margin-left: 5px;

  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;

  :active, :hover {
    outline: 0;
  }

  @media (min-width: 768px) {
    font-size: 24px;
    min-width: 196px;
  }
`;

const StyledSpan = styled.span`
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;

  :hover, :active{
    background: none;
  }
`;

const StyledHeading = styled.h1`
  margin-top: 0;
  padding-top: 3rem;
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
      <StyledHeading>Random Number Generator</StyledHeading>
      <h3>No Duplicates!</h3>
      <FlexContainer>
        <p>Between 1 and&nbsp;</p>
        <StyledInput type="number" disabled={disabled} value={number} onInput={(e) => setNumber(e.target.value)} />
        <StyledButton onClick={submit}><StyledSpan>{disabled ? "Reset" : "Submit"}</StyledSpan></StyledButton>
      </FlexContainer>
      <h2>{randomNumber}</h2>
      <button onClick={generate}>Generate!</button>
    </Container>
  );
}

export default App;
