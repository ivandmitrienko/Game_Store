import React from "react";
import { calcTotalPrice } from '../utils';
import { Button } from '../Button/Button.jsx';
import "./BasketMenu.css";


const BasketMenu = ({items, onclick}) => {

    
    return(
        <div className="BasketMenu">
          <div className="BasketMenu__games-list">
              {items.length > 0 ? items.map(game=>game.title): 'Корзина пуста'}
          </div>
          {items.length > 0 ? 
          <div className="BasketMenu__arrange">
              <div className="BasketMenu__total-price">
                  <span>Итого:</span>
                  <span>{calcTotalPrice(items)} руб.</span>
              </div>
              <Button type="primary" size='m' onClick={ onclick }>
                  Оформить заказ
              </Button>
          </div>:
          null}
        </div>
    )
}

export {BasketMenu};