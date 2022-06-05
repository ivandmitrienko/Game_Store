import React from "react";
import "./Basket.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Basket = () => {
    return(
        <div className="BasketBlock">
            <AiOutlineShoppingCart size={25} className="BasketBlock__icon"/>
            <span className="BasketBlock__total-price">1руб.</span>
        </div>
    )
}

export {Basket};