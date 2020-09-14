import React, { useState } from 'react';
import './App.css';
import ChatDisplayHolder from './components/ChatDisplayHolder';
import MessageInput from './components/MessageInput';


function App() {
  const person1 = { name: "Amy", avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" };
  const person2 = { name: "John", avatar: "https://images.unsplash.com/photo-1564061170517-d3907caa96ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80" };

  const initialMessages = [
    {
      id: 1,
      sender: person1.name,
      message: "hey",
      avatar: person1.avatar
    },
    {
      id: 2,
      sender: person2.name,
      message: "hi",
      avatar: person2.avatar
    },
  ]

  const [messages, setMessages] = useState(initialMessages);

  const sendMessage = (message, sender) => {
    const receivedMessage = {
      id: Math.random().toString(36).substring(7),
      sender: sender.name,
      message: message,
      avatar: sender.avatar
    };
    const messagesSoFar = [...messages];
    messagesSoFar.push(receivedMessage);
    setMessages(messagesSoFar);
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="messageHolder">
          <ChatDisplayHolder messages={messages} />
        </div>
        <div className="inputsHolder">
          <MessageInput sendMessage={sendMessage} sender={person1} />
          <MessageInput sendMessage={sendMessage} sender={person2} />
        </div>
      </div>
    </div>
  );
}

export default App;