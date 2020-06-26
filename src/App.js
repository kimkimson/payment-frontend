import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { CheckoutSuccess, CheckoutFormHooks, ListPackage } from "./containers";

const stripePromise = loadStripe("pk_test_qrcxTziEYdzfebetiWFXFIGE00Xbh8ryds");

function App() {
    return (
        <Router>
            <Elements stripe={stripePromise}>
                <CheckoutFormHooks />
                <Switch>
                    <Route path="/" exact component={ListPackage} />
                    <Route path="/checkout-success" exact component={CheckoutSuccess} />
                </Switch>
            </Elements>
        </Router>
    );
}

export default App;
