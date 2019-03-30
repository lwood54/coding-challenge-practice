import React from "react";
import ReactDOM from "react-dom";
import MissingInt from "./components/Arrays/MissingInt";
import DuplicateNum from "./components/Arrays/DuplicateNum";
import "bootstrap/dist/css/bootstrap.min.css";
import cls from "./index.module.css";

function App() {
  return (
    <div className="App">
      <h1 className={cls.mainHeading}>
        Coding Challenge Questions & Thought Process
      </h1>
      <h1 className={cls.sectionHeading}>Arrays</h1>
      <MissingInt />
      <DuplicateNum />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
