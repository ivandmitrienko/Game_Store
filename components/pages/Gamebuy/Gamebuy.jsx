import React from "react";
import './Gamebuy.css';
import { Button } from '../../Button/Button.jsx';

const Gamebuy = ({game}) => {

  
    return (      
            <div className="game-buy">
                <span className="game-buy__price">{game.price} руб.</span>
                    <Button onClick={()=>null}>
                     В Корзину
                    </Button>   
            </div>        
          )
  
    
  }
  
  export {Gamebuy};