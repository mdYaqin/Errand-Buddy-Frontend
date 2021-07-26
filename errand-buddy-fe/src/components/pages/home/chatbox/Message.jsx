import React from 'react';
import "../../../../style/Message.scss";

function Message({own}) {
    return (
        <div className={ own ? "message own" : "message"} >
            <div className="messageTop">
                <img
                className="message-image"
                src="https://i.picsum.photos/id/122/200/300.jpg?hmac=OfQ8cObBgD7BOhMjqNrjqHDjO-rXiNQ4KvSd8QRAuIA" 
                alt="msg"
                />
                <p className='messageText'>Hi This is a msg</p>
            </div>
            <div className="messageBottom">1 hour ago</div>

            
        </div>
    );
}

export default Message;