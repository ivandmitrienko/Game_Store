import React from "react";

const BasketMenu = ({items, onclick}) => {

    
    return(
        <div className="BasketMenu">
          <div className="BasketMenu__games-list">
              {items.map(game=>game.title)}
          </div>
          {items.length > 0 ? 
          <div className="BasketMenu__arrange">
              <div className="BasketMenu__total-price">
                  <span>Итого:</span>
                  <span></span>
              </div>
          </div>:
          null}
        </div>
    )
}

export {BasketMenu};