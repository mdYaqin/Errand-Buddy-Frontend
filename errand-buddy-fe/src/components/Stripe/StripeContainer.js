import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm2 from './PaymentForm2';
import React from 'react';

const PUBLIC_KEY = 'pk_test_51JCPkBLfbgL4ulk988CRMmHvUElLNS7PJU8Q4Y1OCORz6YH84BNw6Ycke1z0On1WmqK8fr9knq3oCpCtznK4UtHd00gkNx2Hbm'

const stripeTestPromise =  loadStripe(PUBLIC_KEY)

function StripeContainer() {
    return (
        <div>
            <Elements stripe={stripeTestPromise}>
                <PaymentForm2 />

            </Elements>
                            
        </div>
    );
}

export default StripeContainer;