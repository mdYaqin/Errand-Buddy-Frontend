import axios from 'axios'
import React, {useState}  from 'react'
import { useEffect } from 'react';
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";

const Success = () => {

    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get('session_id');  

    console.log(sessionId)
    const [paid, setPaid] = useState(false)

    // //make call to backend to update paid
    axios.patch('http://localhost:4000/api/errands/successfulpayment',
    {
        sessionId
    }, 
            
    {
        headers: {
        'x-auth-token': localStorage.getItem('jwt'),
        },       
    }
    ) 
    .then(res => {
        if (res.data.success) { 
            setPaid(true)
        }
    })

    
        return (      
            <div>
            <h1>Successful Payment</h1>                           
                <Link to='/buddy/buddy-dashboard'>
                    <button> Continue</button>                        
                </Link>                    
            </div>
        
        )
    // } else {

    //     <div>
    //     <h1>Unsuccessful Payment</h1>                           
    //         <Link to='/buddy/buddy-dashboard'>
    //             <button> Continue</button>                        
    //         </Link>                    
    //     </div>


    // }

    

}

export default Success