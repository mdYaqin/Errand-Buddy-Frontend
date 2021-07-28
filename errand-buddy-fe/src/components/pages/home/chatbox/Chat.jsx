import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../../../style/Chat.scss";
import Conversation from './Conversation';
import Message from './Message';

function Chat(props) {

    const [buyerConversations, setBuyerConversations] = useState([])
   
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const [searchField, setSearchField] = useState("") 

    const user_name = localStorage.getItem('username')

    let filteredChats = buyerConversations.filter( item =>
        item.errand_desc.toLowerCase().includes(searchField.toLowerCase())
    )

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = {
            sender: user_name,
            text: newMessage.trim(),
            conversationId: currentChat._id
        }

        axios.post('http://localhost:4000/api/chats/newmessage', {message})
        .then(res => {
            setMessages([...messages, res.data])
            setNewMessage("")
        })
    }


    useEffect(() => {
      axios.get(`http://localhost:4000/api/chats/buyerconversations/` + user_name)
      .then(res => {
          console.log(user_name)
          setBuyerConversations(res.data)
      })
      .catch((error) => {
        console.log('error')
      })
    }, [user_name])

    useEffect(() => {
        
        if(currentChat) {        
            axios.get('http://localhost:4000/api/chats/' + currentChat._id)
            .then(res => {
                setMessages(res.data)
            })
        }

    }, [currentChat])

    return (
        
        <div className="chat">
            <div className="errand-chats">
                <div className="errand-wrapper">
                    <input className="search-chat" placeholder="Search Chats" onChange={e => {setSearchField(e.target.value)}}/>
                    {filteredChats.map((item)=> (
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
                            { newMessage.trim() === "" ? 
                                (<button className="chatSubmit" onClick={handleSubmit} disabled style={{color: "grey", backgroundColor: "lightgrey"}}>Send</button>) 
                                : 
                                (<button className="chatSubmit" onClick={handleSubmit}>Send</button>)
                            }
                            
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