import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { Link, Redirect, useHistory } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';



function PaymentForm2(props) {

    const history = useHistory();
    
    const [product, setProduct] = useState({
        name: "Errand",
        price:"10",
        productBy: "user"
    })


    const makePayment = token => {
        const body = {
            token,
            product
        }

        try { 
            axios.post("http://localhost:4000/api/payment/:id", // has to be the errand._id
            
            {
                body
            } ,
            
            {
                headers: {
                "x-auth-token": localStorage.getItem("jwt"),
                "content-type": "application/json"
                }
            }
        ).then (response => {
            console.log("response", response)
            const {status} = response

            console.log('status', status)
            if(response.data.success) {
                alert("payment successful")
                history.push('/users/User_dashboard')
            } else {
                alert ('payment')
            }
            
        })
        } catch (error) {
            console.log(error.message)
        }   
    }
    
    return (

        <StripeCheckout 
            stripeKey={process.env.REACT_APP_STRIPE} 
            token={makePayment} 
            name="Errand payment">

            <button className="btn-small blue">Pay</button>

        </StripeCheckout>
    );
}

export default PaymentForm2;
