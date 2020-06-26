import React from "react";
import { useStripe } from "@stripe/react-stripe-js";

import { PackageItem } from "components";
import { packages as PACKAGES } from "./mock.data";
import { fetchCheckoutSession } from "utils/generateApi";

import "./style.scss";

const ListPackage = () => {
    const stripe = useStripe();
    async function handleClickPlaceHolder(packageProduct) {
        try {
            const payload = { package: packageProduct };
            const { data } = await fetchCheckoutSession(payload);
            const { id: sessionId } = data;
            const { error } = await stripe.redirectToCheckout({ sessionId });
            if (error) {
                alert(error.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div id="product-list">
            {PACKAGES.map((item) => (
                <PackageItem key={item.id} {...item} onClickPlaceHolder={handleClickPlaceHolder} />
            ))}
        </div>
    );
};

export default ListPackage;
