import React from "react";
import "./style.scss";

const PackageItem = (props) => {
    const { id, name, amount, onClickPlaceHolder } = props;
    return (
        <div className="package-item">
            <div className="package-name">{name}</div>
            <div className="package-amount">
                {amount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                })}
            </div>
            <div className="place-holder">
                <button onClick={() => onClickPlaceHolder(id)}>Place holder</button>
            </div>
        </div>
    );
};

export default PackageItem;
