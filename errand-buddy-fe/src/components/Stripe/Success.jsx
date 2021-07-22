import axios from 'axios'
import React from 'react'
import { withRouter } from 'react-router'

const Success = ({history}) => {

    // axios.patch('h') //make cal to backend to update paid

    return (
        <div>
            <h1>Successful Payment</h1>
            <button>Continue</button>
        
        </div>
    )
}
export default Success;
