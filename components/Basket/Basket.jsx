import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Basket.css";
import { calcTotalPrice } from '../utils';
import { BasketMenu } from '../BasketMenu/BasketMenu.jsx';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ItemsInBasket } from '../itemsInBasket/itemsInBasket.jsx';
// import { useNavigate } from "react-router-dom";

const Basket = () => {
    const [isBasketMenuVisible, setBasketMenuVisible] = useState(false);
    const items = useSelector(state => state.basket.itemsInBasket);
    const totalPrice = calcTotalPrice(items);
    // const navigate = useNavigate();
    const handleClick = () => {setBasketMenuVisible(false)}


    return (
        <div className="BasketBlock">
            < ItemsInBasket quantity={items.length}/>
            <AiOutlineShoppingCart size={25} className="BasketBlock__icon" onClick={() => setBasketMenuVisible(!isBasketMenuVisible)} />
            {totalPrice ? <span className="BasketBlock__total-price">{totalPrice} руб.</span> : null}
            {isBasketMenuVisible && <BasketMenu items={items} onClick={handleClick} />}
        </div>
    )
}

export { Basket };