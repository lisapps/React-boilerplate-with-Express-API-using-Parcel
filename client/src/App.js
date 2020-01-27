import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Example from "./components/Example";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
        <Example />
      </header>
    </div>
  );
}

export default App;
