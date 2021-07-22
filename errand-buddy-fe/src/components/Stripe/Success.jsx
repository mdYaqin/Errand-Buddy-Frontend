import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";

const Success = () => {

    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get('session_id');  
    const userId = localStorage.getItem("userId")

    console.log(sessionId)
    const [paid, setPaid] = useState(false)

    useEffect(() => {
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
                setPaid(true)
            }
           console.log(res.data) 
        })
    },[])

    return (
        <div>
            <h1>Successful Payment</h1>
                                
            <Link to={`/dashboard/${userId}`}>
                <button> Continue</button>                        
            </Link>                    
        </div>
    )
    

}

export default Success
