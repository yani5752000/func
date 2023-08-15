import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Messages from './components/Messages';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = () => {
    axios.get("http://localhost:8080/messages")
      .then(result => {
        const messages = result.data;
        setMessages(messages);
      })
      .catch(error => console.log(error));
  };


  const createMessage = () => {
    const content = prompt("enter the message");
    console.log("axios content: ", content);
    axios.post("http://localhost:8080/messages", {content})
      .then(result => {
        console.log(result);
        getMessages();
      })
      .catch(error => console.log(error))
  }

  const deleteMessage = () => {
    const id = prompt("Enter the id of the message to be deleted");
    axios.delete(`http://localhost:8080/messages/delete/${id}`)
      .then(result => {
        console.log("delete result: ", result);
        getMessages();
      })
      .catch(error => console.log(error));
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
        <button 
          style={{height:50, width: 100, color:"blue", backgroundColor:"red"}} 
          onClick={deleteMessage}
          >
            Delete a Message
        </button>
      </header>
      
    </div>
    
  );
}

export default App;
