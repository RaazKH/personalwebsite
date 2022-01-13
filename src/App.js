import { useState } from "react";
import styled, { css } from "styled-components";


const CommonButton = css`
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  box-sizing: border-box;
  color: #FFFFFF;
  font-family: Phantomsans, sans-serif;
  line-height: 1em;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
`;

const Container = styled.div`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(2,0,36);
  background: linear-gradient(157deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(5,6,45,1) 100%); 
  color: white;
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const FlexContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Phantomsans, sans-serif;
  font-size: 24px;
  `;

const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: textfield;
  margin: 0;
  max-width: 30px;
`;

const StyledButton = styled.button`
  ${CommonButton};
  margin-bottom: 50px;
  font-size: 24px;
  padding: 16px 24px;

  @media (min-width: 700px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledRandom = styled.h2`
  flex-grow: 1;
  font-size: 16px;
  font-size: 20vw;
  @media (min-width: 700px) {
    margin: 0px;
  }
`;

const StyledSubmit = styled.button`
  margin: 20px;
  font-size: 20px;
  ${CommonButton};
  padding: 6px 16px;
`;

function App() {
  const [number, setNumber] = useState("1");

  const [display, setDisplay] = useState("1");

  const [disabled, setDisabled] = useState(false);
  const [reset, setReset] = useState(false);

  const [randomNumber, setRandomNumber] = useState("0");

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

    if (disabled === true) setReset(false);

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
    if (!(numArray.length > 0)) { setRandomNumber("Good job!"); setReset(true) }
  };

  return (
    <Container>
      <h1 style={{ margintop: 0, padding: 48 }}>Random Number Generator</h1>
      <h3>No Duplicates!</h3>
      <FlexContainer>
        <p>Between 1 and&nbsp;</p>
        <StyledInput type="number" style={{ display: disabled ? "none" : "block" }} value={number} onInput={(e) => setNumber(e.target.value)} />
        <p style={{ display: disabled ? "block" : "none" }}>{number}</p>
        <StyledSubmit onClick={submit}>{disabled ? "Reset" : "Submit"}</StyledSubmit>
      </FlexContainer>
      <StyledRandom>{randomNumber}</StyledRandom>
      <StyledButton onClick={generate} disabled={!disabled}>{reset ? "Click Reset!" : disabled ? "Generate!" : "Click Submit!"}</StyledButton>
    </Container>
  );
}

export default App;
