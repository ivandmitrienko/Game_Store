import React from "react";
import './BasketItem.css';

const BasketItem = ({title, price}) => {

  
    return (      
        <div className="BasketItem">
            <span>{title}</span>
            <div className="BasketItem__price">
                <span>{price} руб.</span>
            </div>

        </div>
    )
  
    
}
  
export {BasketItem};