import React from 'react';
import SingleMessage from './SingleMessage';

function ChatDisplayHolder(messages) {
    return (
        <div>
            {messages.messages.map((message) => (
                <SingleMessage message={message} key={message.id}></SingleMessage>
            ))}
        </div>
    )
}

export default ChatDisplayHolder;
