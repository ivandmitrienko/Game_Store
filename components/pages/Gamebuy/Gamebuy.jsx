import React from "react";
import { useDispatch } from "react-redux";
import { setItemInBasket } from '../../Redux/Basket/reducer'
import './Gamebuy.css';
import { Button } from '../../Button/Button.jsx';

const Gamebuy = ({game}) => {

    const dispatch = useDispatch();

    const handleClicke = (EO)=>{
        EO.stopPropagation();
        dispatch(setItemInBasket(game));

    }; 


    return (      
            <div className="game-buy">
                <span className="game-buy__price">{game.price} руб.</span>
                    <Button onClick={handleClicke} type="primary">
                     В Корзину
                    </Button>   
            </div>        
          )
  
    
  }
  
  export {Gamebuy};