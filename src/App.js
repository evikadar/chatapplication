import React, { useState } from 'react';
import './App.css';
import ChatDisplayHolder from './components/ChatDisplayHolder';
import MessageInput from './components/MessageInput';


function App() {

  const initialMessages = [
    {
      sender: "Amy",
      message: "hey",
      avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    },
    {
      sender: "John",
      message: "hi",
      avatar: "https://images.unsplash.com/photo-1564061170517-d3907caa96ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
    },
    {
      sender: "Amy",
      message: "how is your day?",
      avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    },
    {
      sender: "Amy",
      message: "i went to the dentist it was pure torture",
      avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
    },
    {
      sender: "John",
      message: "hi",
      avatar: "https://images.unsplash.com/photo-1564061170517-d3907caa96ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80"
    }
  ]

  const [messages, setMessages] = useState(initialMessages);
  


  // phase 1 - components
  // todo: component 1 - chatdisplayholder into separate component, pass messages
  // component 2 - create component for chat messages inside that, display messages (looping)
  // component 3 - create component for chat input boxes

  // phase 2 - functionality
  // get new message on send, add it to initialmessages array and update the array


  return (
    <div className="App">
      <header className="App-header">
        <div class="mainContainer">
          <ChatDisplayHolder messages={messages} />
          <MessageInput />
        </div>
      </header>
    </div>
  );
}

export default App;
