import React from 'react';
import "../../../../style/Message.scss";
import { format } from 'timeago.js'

function Message({message, own}) {

    return (
        <div className={ own ? "message own" : "message"} >
            <div className="messageTop">
                <img
                className="message-image"
                src="https://i.picsum.photos/id/122/200/300.jpg?hmac=OfQ8cObBgD7BOhMjqNrjqHDjO-rXiNQ4KvSd8QRAuIA" 
                alt="msg"
                />
                <p className='messageText'>{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>

            
        </div>
    );
}

export default Message;