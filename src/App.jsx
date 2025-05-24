//import useState
import { useState } from "react";

export default function App() {
  //qui iniziamo a dichiarare lo useState
  // let counterState = useState(0);
  // let counter = counterState[0];
  // let setCounter = counterState[1];

  //scritta meglio:
  let [counter, setCounter] = useState(0);

  //un'ìaltra per colore bottone?
  let [colorRed, setColorRed] = useState(false);

  // qui invece facciamo la funzione che incrementa di uno il click;
  const handleButtonClick = () => {
    setCounter(counter + 1);
    setColorRed((isRed) => !isRed);
  };

  return (
    <div className="container">
      {/* qui vuol dire che prendo il click e lo traccio, è un event listener insomma */}
      <button
        className={`btn ${colorRed ? "red" : ""}`}
        onClick={handleButtonClick}
      >
        Il bottone counter
      </button>
      <h2>{counter}</h2>
    </div>
  );
}
