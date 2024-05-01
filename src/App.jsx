import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
const [calval,setCalVal] = useState("44");
const OnButtonClick=(buttonText)=> {
  // console.log("Button Clicked." + buttonText);
  if(buttonText=='C'){
    setCalVal("");
  } else if(buttonText=='='){
const result = eval ( calval);
setCalVal(result);
    } else{ 
      const newDisplayvalue = calval+buttonText;
      setCalVal(newDisplayvalue);
    }
  };



  return (
    
    <div className = {styles.calculator}>
      <h2 className="center">calculator</h2>
     <Display displayValue={calval}></Display>
    
     <ButtonContainer OnButtonClick={OnButtonClick}></ButtonContainer>
     
    </div>
  );
}

export default App;

