import React from "react";
import './orderItem.css';
import { Gamecover } from '../../../Gamecover.jsx';
import { useDispatch } from "react-redux";
import { AiFillCloseCircle } from 'react-icons/ai';
import { deleteItemFromBasket } from '../../../../Redux/Basket/reducer';

const OrderItem = ({game}) => {
    console.log(game);

    const dispatch = useDispatch();
    const handleClick = () =>{dispatch(deleteItemFromBasket(game.id));}
 
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
                <AiFillCloseCircle
                size={25}
                className="orderItem__delete-icon"
                onClick={handleClick}
                /> 
            </div>
        </div>
    )
  
    
}
  
export {OrderItem};