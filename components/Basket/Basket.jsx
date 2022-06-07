import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Basket.css";
import { calcTotalPrice } from '../utils';
import { BasketMenu } from '../BasketMenu/BasketMenu.jsx';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ItemsInBasket } from '../itemsInBasket/itemsInBasket.jsx';

const Basket = () => {
    const [isBasketMenuVisible, setBasketMenuVisible] = useState(false);
    const items = useSelector(state => state.basket.itemsInBasket);
    const totalPrice = calcTotalPrice(items);

    return (
        <div className="BasketBlock">
            <ItemsInBasket quantity={items.length}/>
            <AiOutlineShoppingCart size={25} className="BasketBlock__icon" onClick={() => setBasketMenuVisible(!isBasketMenuVisible)} />
            {totalPrice ? <span className="BasketBlock__total-price">{totalPrice} руб.</span> : null}
            {isBasketMenuVisible && <BasketMenu items={items} onClick={() => null} />}
        </div>
    )
}

export { Basket };