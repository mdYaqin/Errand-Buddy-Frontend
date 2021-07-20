// import React, { useState, useEffect } from 'react';
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
// import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios';


// const CARD_Options = {

//     style: {
//         base: {
//             iconColor: '#c4f0ff',
//             color: '#fff',
//             fontWeight: '500',
//             fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
//             fontSize: '16px',
//             fontSmoothing: 'antialiased',
//             ':-webkit-autofill': {
//               color: '#fce883',
//             },
//             '::placeholder': {
//               color: '#87BBFD',
//             },
//           },
//           invalid: {
//             iconColor: '#FFC7EE',
//             color: '#FFC7EE',
//           },
//     },
// }

// function PaymentForm(props) {

//     const [ success, setSuccess ] = useState(false)

//     const stripe = useStripe()
//     const elements =  useElements()

//     const handleSubmit = async (e) => {
//         e.preventDefault ()

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: "card",
//             card: elements.getElement(CardElement)
//         })

//         if(!error) {
//             try {
    
//                 const { id } = paymentMethod
//                 const response = await axios.post("http://localhost:4000/api/payment/:id", {
//                     amount: 1000,
//                     id
//                 })
    
//                 if(response.data.success) {
//                     console.log("Successful payment")
//                     setSuccess(true)
//                 }
                
//             } catch(error) {
    
//                 console.log("Error", error)
//             }
//         } else {
//             console.log (error.message)
//         }
//     }

//     return (
//         <>

//             {!success ? 
//                 <form onSubmit={handleSubmit}>
//                     <fieldset className="FormGroup">
//                         <div className="FormRow">
//                             <CardElement options={CARD_Options}/>
//                         </div>
//                     </fieldset>
//                     <button className="stripe-button">Pay</button>
//                 </form>
//                 :

//                 <div>
//                     <h2>Payment Successful</h2>
//                 </div>
//             }

            
//         </>
//     );
// }

// export default PaymentForm;