import React from 'react';

function ChatDisplayHolder(messages) {
    return (
        <div class="chatDisplayHolder">
            {messages.messages.map((message) => (

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
    )
}

export default ChatDisplayHolder;
