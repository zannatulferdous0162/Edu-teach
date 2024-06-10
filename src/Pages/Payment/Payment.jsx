import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOut from './CheckOut';
const stripePromise = loadStripe(import.meta.env.VITE_PAYEMNT);
const Payment = () => {
    const data=useLoaderData()
    const priceData=parseFloat(data.price.toFixed(2))
    return (
        <div>
             <h2 className=' text-4xl text-center'>PAYMENT</h2> 
             <Elements stripe={stripePromise}>
               <CheckOut classes={data} price={priceData}></CheckOut>
             </Elements>

        </div>
    );
};

export default Payment;