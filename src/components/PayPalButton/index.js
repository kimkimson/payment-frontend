import React from "react";
import ReactDOM from "react-dom";

const PayPal = window.paypal.Buttons.driver("react", { React, ReactDOM });
const payPalStyle = {
    height: 38,
    layout: "horizontal", // horizontal | vertical
    size: "responsive", // small | medium | large | responsive
    shape: "rect", // pill | rect
    color: "blue", // gold | blue | silver | white | black
    label: "checkout", // checkout | credit | pay | buynow | paypal | installment
};

const PayPalButton = (props) => {
    const { currency, total, commit, client, env, locale } = props;

    function payment(data, actions) {
        // Set up the payment here, when the buyer clicks on the button
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: {
                            total: total || '10.28',
                            currency,
                        },
                    },
                ],
            },
            experience: {
                input_fields: {
                    no_shipping: 1, // không hiển thị địa chỉ nhận hàng ở trang thanh toán paypal
                },
            },
            // redirect_urls: {
            //   return_url: 'https://example.com',
            //   cancel_url: 'https://example.com'
            // }
        });
    }

    function onAuthorize(data, actions) {
        // Optional: display a confirmation page here
        // Execute the payment here, when the buyer approves the transaction
        // Get the payment details
        return actions.payment.get().then((paymentDetails) => {
            // Show a confirmation using the details from paymentDetails
            // Then listen for a click on your confirm button
            // Execute the payment
            console.log(data, paymentDetails)
            actions.payment.execute().then(function () {
                console.log(data, paymentDetails)
                // Show a success page to the buyer
            });
        });
    }

    function onCancel(data, actions) {
        console.log("onCancel", data, actions)
        // Show a cancel page or return to cart
    }

    function onError(err) {
        console.log("onError", err)
        // Show an error page here, when an error occurs
    }

    return (
        <PayPal
            style={payPalStyle}
            locale={locale}
            commit={commit}
            client={client}
            env={env}
            payment={payment}
            onCancel={onCancel}
            onError={onError} // If an error prevents buyer checkout, define an error page
            onAuthorize={onAuthorize}
        />
    );
};

export default PayPalButton;

PayPalButton.defaultProps = {
    currency: "USD",
    locale: "en_US",
    commit: true, // Optional: show a 'Pay Now' button in the checkout flow
    env: "sandbox", // Optional: specify 'production' environment
    client: {
        sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID,
    },
};
