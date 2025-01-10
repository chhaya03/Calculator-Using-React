import "./App.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import Container from "./Components/Container";
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState(""); //it works for display

  const onButtonclick = (buttonText) => {
    if (buttonText === "AC") {
      setcalVal("");
    } else if (buttonText === "C") {
      const dlt = calVal.toString().slice(0, -1);
      setcalVal(dlt);
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <div className="App">
      <Container>
        <h3 className="head">Calculator</h3>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonclick={onButtonclick}></ButtonContainer>
      </Container>
    </div>
  );
}

export default App;
