import React from "react";
import './orderItem.css';
import { Gamecover } from '../../../Gamecover.jsx';

const OrderItem = ({game}) => {
 
    return (      
        <div className="orderItem">
            <div className="orderItem__cover">
                <Gamecover image={game.image}/>
            </div>
            <div className="orderItem__title">
                <span>{game.title}</span>
            </div>
            <div className="orderItem__price">
                <span>{game.price} руб.</span>
            </div>
        </div>
    )
  
    
}
  
export {OrderItem};