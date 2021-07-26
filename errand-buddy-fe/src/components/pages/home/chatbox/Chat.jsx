import React from 'react';
import "../../../style/Chat.scss";
import Conversation from './Conversation';

function chat(props) {
    return (
        
        <div classname="chat">
            <div className="errand-chats">
                <div className="errand-wrapper">
                    <input placeholder="Search Chat" />

                </div>
            </div>
                
            <div className="main-chat">
                <div className="main-wrapper">
                    <Conversation/>
                    
                </div>
            </div>
                
            
        </div>
    );
}

export default chat;