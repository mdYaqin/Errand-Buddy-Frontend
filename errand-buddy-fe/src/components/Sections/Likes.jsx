import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from "react";
import Axios from 'axios';

function Likes(props) {

    const variable = { errandId: props.errandId, userId: props.userId}
    const [Likes, setLikes] = useState(0)
    const [LikeAction, setLikeAction] = useState(null)

    useEffect( () => {

        Axios.post('http://localhost:4000/api/errands/like', variable)
        .then(response => {
            if(response.data.success) {
                
                setLikes(response.data.likes.length)

                response.data.likes.map(like => {
                    if(like.userID === props.userId) {
                        setLikeAction('liked')
                    }
                })
            } else {
                alert('failed to get likes')
            }
        })
    }, [])

    const onLike = () => {
        
        if(LikeAction === null)  {

            Axios.post('http://localhost:4000/api/errands/like/addLike', variable)
            .then(response => {
                if (response.data.success) {

                    setLikes(Likes + 1)
                    setLikeAction('liked')

                } else {
                    alert('failed to add like')
                }
            })

        } else {

            Axios.post('http://localhost:4000/api/errands/like/removeLike', variable)
            .then(response => {
                if (response.data.success) {

                    setLikes(Likes - 1)
                    setLikeAction(null)

                } else {
                    alert('failed to remove like')
                }
            })
        }
    }

    return (
        <div className="card-like">
            <i className="far fa-heart" theme ={ LikeAction === 'liked' ? 'filled' : 'outlined'}
            onClick={onLike}
            >

            </i>
            <span>{Likes}</span>
        </div>
    );
}

export default Likes;