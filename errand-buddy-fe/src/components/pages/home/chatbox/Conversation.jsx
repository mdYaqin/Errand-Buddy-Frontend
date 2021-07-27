import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../../../../style/Conversation.scss";

function Conversation({conversation, currentUser}) {

    const [otherUser, setOtherUser] = useState(null)

    useEffect(() => {
        console.log('5',conversation)
        const otherPersonName = conversation.seller
        setOtherUser(otherPersonName)

    //     axios.get('http://localhost:4000/api/chats/')
    //     .then( res => {
    //         console.log(res)
    //     })
    // },[currentUser, conversation])
    },[])

    return (
        <div className="conversation">
            {/* <img className ="conversation-image" src="https://i.picsum.photos/id/599/200/300.jpg?hmac=E2gUK85wncj5qALDLpEjQzqgfazui9pDGMgzVWMpqo4" alt="as" /> */}
            <span className="conversation-name">{otherUser}</span>
            
        </div>
    );
}


export default Conversation;