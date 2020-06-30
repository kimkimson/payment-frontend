import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { PayPalButton } from "components";
import { CheckoutSuccess, CheckoutFormHooks, ListPackage } from "./containers";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_CLIENT_ID);

function App() {
    const PayPal = window.paypal.Buttons.driver;
    console.log(PayPal);
    return (
        <Router>
            <Switch>
                <Elements stripe={stripePromise}>
                    <CheckoutFormHooks />
                    <Route path="/" exact component={ListPackage} />
                    <Route path="/checkout-success" exact component={CheckoutSuccess} />
                </Elements>
            </Switch>
            <PayPalButton />
        </Router>
    );
}

export default App;
