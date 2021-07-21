import React, {useState, useEffect} from "react";
import { useStripe } from '@stripe/react-stripe-js'
// import { isAuthenticated } from "../../auth";
import {Link} from "react-router-dom";
import axios from "axios";



export default function Payments(props) {

  const stripe =  useStripe();

  const [message, setMessage] = useState("");

  const ErrandDisplay = () => (
  
    <section>
      <div className="errand">
        <img
          src={props.location.state.errandData.errandImage} //must be the errand picture
          alt="errand"
        />
  
        <div className="description">
          <h3>{props.location.state.errandData.errandName}</h3> 
          <h5>{props.location.state.errandData.errandPrice}</h5>
        </div>
      </div>
      <form action="" method="">
        <button type="submit" onClick={handleClick}>
          Checkout
        </button>
      </form>
    </section>
  );
  
  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );
  
  const handleClick = (e) => {
    e.preventDefault();
  
    const {errandImage, errandName, errandPrice} = props.location.state.errandData
    
    const line_items = [
      {
        price_data: {
          currency: "sgd",
          unit_amount: errandPrice * 100, //amount is in cents for Stripe
          product_data: {
            name: errandName,
            images: [errandImage]
          }
        },

        quantity: 1
      }
    ]
    
    const user_id = localStorage.getItem('userId')
    axios
      .post(`http://localhost:4000/api/payment/create-checkout-session`, 
      { line_items, user_id },
        {
          headers: {
            'x-auth-token': localStorage.getItem('jwt'),
          },       
        }
      )
      .then((res) => {

        const { sessionId } = res.data

        const { error } = stripe.redirectToCheckout ({
          sessionId
        })

        if (error) {
          console.log(error)
        }
        // window.location = res.data.url
        // console.log(res.data);

      });
  }
  

  return message ? (
    <Message message={message} />
  ) : (
    <ErrandDisplay />
  );
}
