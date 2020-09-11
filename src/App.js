import React, { useState } from 'react';
import './App.css';


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
  ]

  const [messages, setMessages] = useState(initialMessages);
  const [person1message, setPerson1message] = useState("");
  const [person2message, setPerson2message] = useState("");

  const onPerson1MessageChange = (
    event
  ) => {
    setPerson1message(event.currentTarget.value);
  };


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

          <div class="chatDisplayHolder">

            {messages.map((message) => (

              <div class="chatMessageHolder" className={`${message.sender === 'Amy' ? "left" : "right"}`} >

                {message.sender === "Amy" &&
                  <img class="avatar" src={message.avatar} alt="profile"></img>
                }
                <div class="chatItem">
                  <p>{message.message}</p>
                </div>
                {message.sender === "John" &&
                  <img class="avatar" src={message.avatar} alt="profile"></img>
                }
              </div>
            ))}

          </div>
          <div class="inputFieldsHolder">

            <div class="chatInputBox">
              <input type="text" value={person1message} class="chatInput" onChange={onPerson1MessageChange} />
              <button class="sendButton">Send</button>
            </div>

            <div class="chatInputBox">
              <input type="text" value={person2message} class="chatInput" />
              <button class="sendButton">Send</button>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
