import React from "react";
import "./App.css";
import "../sass/main.scss";
import "../node_modules/animate.css/animate.css";
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
