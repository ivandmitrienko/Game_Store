import React from "react";
import { Button } from "../Button/Button.jsx";
import './ButtonsPaginate.css';

const ButtonsPaginate = () => {
  
    return (      
        <div className="ButtonsPaginate">
           <div className="ButtonsPaginate__allGames">
               <Button type={'third'}>
                   Показать все игры
                </Button>
            </div>
           <Button type={'third'}>Следующие</Button>
        </div>
    )
  
    
}
  
export {ButtonsPaginate};