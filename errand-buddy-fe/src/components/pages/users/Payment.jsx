import React, {useState, useEffect} from "react";
import Layout from "../../Layout";
// import { isAuthenticated } from "../../auth";
import {Link} from "react-router-dom";
import StripeContainer from "../../Stripe/StripeContainer";
import Add_errand  from "./Add_errand";
import axios from "axios";


const ErrandDisplay = (props) => (
  <section>
    <div className="errand">
      <img
        src='https://res.cloudinary.com/dvdjfkiji/image/upload/v1626697580/fllulpamkgbkqyocqlvl.png' //must be the errand picture
        alt="errand"
      />

      <div className="description">
        <h3>name</h3> 
        <h5>price</h5>
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

function handleClick(event) {
  event.preventDefault();

  const product = {
    name: 'mike', // errand description
    price: 10, //actual errand price
    image: 'https://res.cloudinary.com/dvdjfkiji/image/upload/v1626697580/fllulpamkgbkqyocqlvl.png' // actual errand image
  }

  axios
    .post(`http://localhost:4000/api/payment/create-checkout-session`, 
    { product},
      {
        headers: {
          'x-auth-token': localStorage.getItem('jwt'),
          'Access-Control-Allow-Origin': '*'
        },       
      }
    )
    .then((res) => {
      console.log(res.data);
    });
}

export default function Payments() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ErrandDisplay />
  );
}
