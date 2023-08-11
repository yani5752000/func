import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = () => {
    axios.get("http://localhost:8080/messages")
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log(error))
  };

  const createMessage = () => {
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
