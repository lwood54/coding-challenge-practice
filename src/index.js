import React from "react";
import ReactDOM from "react-dom";
import MissingInt from "./components/Arrays/MissingInt";
import DuplicateNum from "./components/Arrays/DuplicateNum";
import "bootstrap/dist/css/bootstrap.min.css";
import cls from "./index.module.css";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="App">
      <h1 className={cls.mainHeading}>
        Coding Challenge Questions & Thought Process
      </h1>
      <Container>
        <h1 className={cls.sectionHeading}>Arrays</h1>
        <MissingInt />
        <DuplicateNum />
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
