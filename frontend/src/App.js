import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Messages from './components/Messages';
import Message from './components/Message';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = () => {
    axios.get("http://localhost:8080/messages")
      .then(result => {
        console.log(result);
        console.log("app data: ", result.data);
        const messages = result.data;
        setMessages(messages);
        console.log("app messages: ", messages);
        return result.data;
      })
      .then(data => {
        setMessages(data);
      })
      .catch(error => console.log(error));
  };


  const createMessage = () => {
    const content = prompt("enter the message");
    console.log("axios content: ", content);
    axios.post("http://localhost:8080/messages/new", {content})
      .then(result => {
        console.log(result);
        getMessages();
      })
      .catch(error => console.log(error))
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
        {/* <Message id={messages[0].id} message={messages[0].message} /> */}
        {/* <p>id: {messages[0].id} message: {messages[0].message}</p> */}
        <Messages messages={messages} ></Messages>
        <button 
          style={{height:50, width: 100, color:"blue", backgroundColor:"red"}} 
          onClick={createMessage}
          >
            Create Message
        </button>
      </header>
      
    </div>
    
  );
}

export default App;
