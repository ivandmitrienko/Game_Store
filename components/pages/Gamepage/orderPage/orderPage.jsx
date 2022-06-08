import React from "react";
import './orderPage.css';
import { useSelector } from "react-redux";
import { calcTotalPrice } from '../../../utils';
import { OrderItem } from "./orderItem/orderItem.jsx";

const OrderPage = () => {

    const items = useSelector(state => state.basket.itemsInBasket);

    if(items.length < 0) {
        <h1>Ваша корзина пуста</h1>
    }

    return (       
            <div className="orderPage">
                <div className="orderPage__left">
                {items.map(game=> <OrderItem game={game} key={game.id} />)}
                </div>
                <div className="orderPage__right">
                    <div className="orderPage__total-price">
                        <span>
                            {items.length} товаров на сумму {calcTotalPrice(items)} руб.
                        </span>
                    </div>

                </div>
                
            </div> 
    )
  
    
}
  
export {OrderPage};