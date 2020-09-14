import React from 'react';

function SingleMessage(message) {
    return (
        <>
            <div className={`${message.message.sender === 'Amy' ? "left" : "right"}`} >

                {message.message.sender === "Amy" &&
                    <img className="avatar" src={message.message.avatar} alt="profile"></img>
                }
                <div className="chatItem">
                    <p>{message.message.message}</p>
                </div>
                {message.message.sender === "John" &&
                    <img className="avatar" src={message.message.avatar} alt="profile"></img>
                }
            </div>
        </>
    )
}

export default SingleMessage;
