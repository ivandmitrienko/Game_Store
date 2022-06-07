import React from "react";
import { useSelector } from "react-redux";
import "./Basket.css";
import { calcTotalPrice } from '../utils';
import { BasketMenu } from '../BasketMenu/BasketMenu.jsx';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Basket = () => {

    const items = useSelector(state =>state.basket.itemsInBasket );
    const totalPrice = calcTotalPrice(items);

    return(
        <div className="BasketBlock">
            <AiOutlineShoppingCart size={25} className="BasketBlock__icon"/>
            <span className="BasketBlock__total-price">{totalPrice}</span>
            <BasketMenu items={ items } onclick={()=>null}/>
        </div>
    )
}

export {Basket};