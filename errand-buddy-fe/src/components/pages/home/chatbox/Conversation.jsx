import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../../../style/Conversation.scss";

function Conversation({conversation, currentUser}) {

    const [otherUser, setOtherUser] = useState(null)
    const user_name = localStorage.getItem('username')
    const [errandDesc, setErrandDesc] = useState('')
    
    useEffect(() => {

        if(conversation.seller === user_name) {
            setOtherUser(conversation.buyer)
        } else {setOtherUser(conversation.seller)}

        setErrandDesc(conversation.errand_desc)

    },[])

    return (
        <div className="conversation">
            {/* <img className ="conversation-image" src="https://i.picsum.photos/id/599/200/300.jpg?hmac=E2gUK85wncj5qALDLpEjQzqgfazui9pDGMgzVWMpqo4" alt="as" /> */}
            <span className="conversation-name"><h4>{otherUser}</h4><h6>{errandDesc}</h6></span>
            
        </div>
    );
}


export default Conversation;