import React, { useState } from 'react';

function MessageInput() {
    const [person1message, setPerson1message] = useState("");
  const [person2message, setPerson2message] = useState("");

  const onPerson1MessageChange = (
    event
  ) => {
    setPerson1message(event.currentTarget.value);
  };

  const onPerson2MessageChange = (
    event
  ) => {
    setPerson2message(event.currentTarget.value);
  };
    return (
        <div class="inputFieldsHolder">

            <div class="chatInputBox">
              <input type="text" value={person1message} class="chatInput" onChange={onPerson1MessageChange} />
              <button class="sendButton">Send</button>
            </div>

            <div class="chatInputBox">
              <input type="text" value={person2message} class="chatInput" onChange={onPerson2MessageChange} />
              <button class="sendButton">Send</button>
            </div>

          </div>
    )
}

export default MessageInput;
