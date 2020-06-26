import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import './style.scss';

const CheckoutFormHooks = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        console.log(error, paymentMethod);
    };

    return (
        <div id="payment-container">
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default CheckoutFormHooks;

// tạo payment_method từ public_key thông qua stripe.createPaymentMethod();
