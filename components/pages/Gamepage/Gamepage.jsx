import React from "react";
import { useSelector } from "react-redux";
import { Gamegenre } from "../../Genre/Genre.jsx";
import { Gamebuy } from "../Gamebuy/Gamebuy.jsx";
import { Gamecover } from "../Gamecover.jsx";
import './Gamepage.css';

const Gamepage = () => {

    const game = useSelector(state=>state.game.currentGame);

    if(!game) return null;
  
    return (   
       <div className="Gamepage" style={{marginTop:"120px"}}> 
           <h1 className="Gamepage__title">{game.title}</h1>
           <div className="Gamepage__content">
               <div className="Gamepage__left">
                   <iframe style={{width: '90%', height: "400px"}} src={game.video} title="Youtube video player"></iframe>
               </div>
               <div className="Gamepage__right">
                   <Gamecover image={game.image} />
                   <p>{game.description}</p>
                   <p className="secondary-text">Популярные метки этого продукта:</p>
                    <Gamegenre genre={game.genres} key={game.id+1}/>
                   <div className="Gamepage__buy-game">
                       <Gamebuy game={game}/>
                   </div>
               </div>
           </div>

       </div>
    )
  
    
}
  
export {Gamepage};