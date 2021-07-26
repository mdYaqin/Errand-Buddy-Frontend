import React from 'react';
import "../../../../style/Chat.scss";
import Conversation from './Conversation';
import Message from './Message';

function Chat(props) {
    return (
        
        <div className="chat">
            <div className="errand-chats">
                <div className="errand-wrapper">
                    <input className="search-chat" placeholder="Search Chats" />
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                </div>
            </div>
                
            <div className="main-chat">
                <div className="main-wrapper">
                    <div className="chatBoxTop">
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chatInput" placeholder="Type Here"></textarea>
                        <button className="chatSubmit">Send</button>
                    </div>
                </div>
            </div>
                
            
        </div>
    );
}

export default Chat;