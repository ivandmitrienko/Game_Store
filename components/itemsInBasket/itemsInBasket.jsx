import React from "react";
import './itemsInBasket.css';

const ItemsInBasket = ({quantity=0}) => {
    return quantity ? (
        <div className="itemsInBasket">
            {quantity}
        </div>
    ):
    null
}

export {ItemsInBasket};