import React from "react";
import ReactDOM from "react-dom";
import Arrays from "./components/Arrays/Arrays";
import "bootstrap/dist/css/bootstrap.min.css";
import cls from "./index.css";

function App() {
	return (
		<div className="App">
			<h1 className="h1">Coding Challenge Questions & Thought Process</h1>
			<Arrays />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
