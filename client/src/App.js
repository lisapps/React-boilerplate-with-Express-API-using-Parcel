import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApiTest from "./components/ApiTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
        <ApiTest />
      </header>
    </div>
  );
}

export default App;
