import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../../../style/Chat.scss";
import Conversation from './Conversation';
import Message from './Message';

function Chat(props) {

    const[conversations, setConversations] = useState([])
    const[currentChat, setCurrentChat] = useState(null)
    const[messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")

    const user_name = localStorage.getItem('username')

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = {
            sender: user_name,
            text: newMessage,
            conversationId: currentChat._id
        }

        axios.post('http://localhost:4000/api/chats/newmessage', {message})
        .then(res => {
            setMessages([...messages, res.data])

        })
    }


    useEffect(() => {
      axios.get(`http://localhost:4000/api/chats/conversations/` + user_name)
      .then(res => {
          setConversations(res.data)
      })
      .catch((error) => {
        console.log('error')
      })
    }, [user_name])

    useEffect(() => {
        
        if(currentChat) {        
            axios.get('http://localhost:4000/api/chats/' + currentChat._id)
            .then(res => {
                console.log('3',res.data)
                setMessages(res.data)
            })
        }

    }, [currentChat])

    return (
        
        <div className="chat">
            <div className="errand-chats">
                <div className="errand-wrapper">
                    <input className="search-chat" placeholder="Search Chats" />
                    {conversations.map((item)=> (
                        <div onClick={() => setCurrentChat(item)}>
                        <Conversation conversation={item} currentUser={user_name}/>
                        </div>
                    ))}

                </div>
            </div>
                
            <div className="main-chat">
                <div className="main-wrapper">
                    {                     
                        currentChat ? 
                        (
                        <>                        
                        <div className="chatBoxTop">
                            {messages.map(msg => (
                                <Message message={msg} own={msg.sender === user_name}/>
                            ))}
                        </div>
                        <div className="chatBoxBottom">
                            <textarea 
                                className="chatInput" 
                                placeholder="Type Here" 
                                onChange={e => setNewMessage(e.target.value)}
                                value={newMessage}
                            >
                            </textarea>
                            <button className="chatSubmit" onClick={handleSubmit}>Send</button>
                        </div>
                        </>
                        ) 
                        : 
                        <span className="noConversation">Open a Conversation to start a Chat</span>
                    }
                </div>
            </div>
                
            
        </div>
    );
}

export default Chat;