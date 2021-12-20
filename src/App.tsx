import React from "react";
import logo from "./resources/images/logo640.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Well come to ME Design.</p>
        <p className="App-tempLang">
          The website development is still in progress, see you soon~
        </p>
      </header>
    </div>
  );
}

export default App;
