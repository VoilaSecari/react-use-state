//import useState
import { useState } from "react";

//import elementi
import Button from "./components/Button.jsx";
import LanguageItem from "./components/LanguageItem.jsx";
import languages from "./data/languages.js";

export default function App() {
  //qui iniziamo a dichiarare lo useState
  // let counterState = useState(0);
  // let counter = counterState[0];
  // let setCounter = counterState[1];

  //scritta meglio:
  // let [counter, setCounter] = useState(0);

  //un'ìaltra per colore bottone?
  // let [colorRed, setColorRed] = useState(false);

  // qui invece facciamo la funzione che incrementa di uno il click;
  // const handleButtonClick = () => {
  //   setCounter(counter + 1);
  //   setColorRed((isRed) => !isRed);
  // };

  // const handleCounterOnly = () => {
  //   setCounter(counter + 1);
  // };

  const renderedItems = () => {
    return languages.map((languageData) => (
      <LanguageItem
        title={languageData.title}
        content={languageData.description}
        key={languageData.id}
      />
    ));
  };

  return (
    <div className="container">
      <div className="container-elementi">
        <Button text={"Bottone 1"} />
        <Button text={"Bottone 2"} />
        <Button text={"Bottone 3"} />
        <Button text={"Bottone 4"} />
      </div>
      <div className="container-item">{renderedItems()}</div>
    </div>
  );
}
