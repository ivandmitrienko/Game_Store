import React from "react";
import { useSelector } from "react-redux";
import "./Basket.css";
// import { BasketMenu } from '../BasketMenu/BasketMenu.js/index.js';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Basket = () => {

    const items = useSelector(state =>state.basket.itemsInBasket );
    const totalPrice = items.reduce((acc, game) =>acc+=game.price,0)

    return(
        <div className="BasketBlock">
            <AiOutlineShoppingCart size={25} className="BasketBlock__icon"/>
            <span className="BasketBlock__total-price">{totalPrice}</span>
            {/* <BasketMenu/> */}
        </div>
    )
}

export {Basket};