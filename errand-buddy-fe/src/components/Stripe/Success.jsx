import axios from 'axios'
import React from 'react'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";

const Success = ({history}) => {

    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get('session_id');  

    console.log(sessionId)
    
    axios.patch('http://locahost:4000/api/errands/successfulpayment', 
        
        {
            sessionId
        }, 
        
        {
            headers: {
                'x-auth-token': localStorage.getItem('jwt'),
            },       
        }
    ) //make call to backend to update paid
        .then ( res => {
            if (res.data.success) {

                return (
                    <div>
                        <h1>Successful Payment</h1>
                                            
                        <Link to='/buddy/buddy-dashboard'>
                            <button> Continue</button>                        
                        </Link>                    
                    </div>
                )

            }
        })

}

export default Success
