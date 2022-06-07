import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemInBasket, deleteItemFromBasket } from '../../Redux/Basket/reducer'
import './Gamebuy.css';
import { Button } from '../../Button/Button.jsx';

const Gamebuy = ({game}) => {

    const dispatch = useDispatch();
    const items = useSelector(state => state.basket.itemsInBasket);
    const isItemInBasket = items.some(items=>items.id===game.id); //находится ли элемент в корзине

    const handleClicke = (EO)=>{// кладем элемент или убираем из корзины
        EO.stopPropagation();
        if(isItemInBasket){
            dispatch(deleteItemFromBasket(game.id))
        } else {
            dispatch(setItemInBasket(game));
        }
    }; 


    return (      
            <div className="game-buy">
                <span className="game-buy__price">{game.price} руб.</span>
                    <Button onClick={handleClicke}  type={isItemInBasket ? 'secondary':'primary'}>
                    {isItemInBasket ? 'Убрать из корзины': "В корзину"}
                    </Button>   
            </div>        
          )
  
    
  }
  
  export {Gamebuy};