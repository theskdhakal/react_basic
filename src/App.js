import { useState } from "react";
import "./App.css";
import Title from "./Title"; //export default
import { Footer } from "./Title"; //inline export
import { Display } from "./display";
import { Btns } from "./Btns";

const App = () => {
  // let counter = 0;

  const [counter, setCounter] = useState(0);

  // const increment = () => {
  //   setCounter(counter + 1);
  //   console.log(counter);
  // };

  // const decrement = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   }
  //   return alert("STOP!!!!   ");
  // };

  // const reset = () => {
  //   setCounter(counter - counter);
  // };

  const update = (operator) => {
    console.log(operator);

    const fun = {
      "+": () => setCounter(counter + 1),
      "-": () => setCounter(counter - 1),
      reset: () => setCounter(0),
    };

    fun[operator]();
    // //increment
    // if (operator === "+") {
    //   setCounter(counter + 1);
    // }

    // if (operator === "-") {
    //   setCounter(counter - 1);
    // }

    // if (operator === "reset") {
    //   setCounter(0);
    // }
  };
  return (
    <div className="App">
      {/* <Title /> */}
      {/* <Footer /> */}
      <Display counter={counter} />
      <br />
      <Btns update={update} />
    </div>
  );
};

export default App;
