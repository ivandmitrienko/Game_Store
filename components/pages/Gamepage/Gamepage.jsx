import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Gamegenre } from "../../Genre/Genre.jsx";
import { Gamebuy } from "../Gamebuy/Gamebuy.jsx";
import { Gamecover } from "../Gamecover.jsx";
import './Gamepage.css';

const Gamepage = () => {

    const {id} = useParams();

    const [game, setGame] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/games/${id}`)
        .then(res => res.json())
        .then(data => setGame(data))
    }, []);
  
    return (       
        <div>
            { game && <div className="Gamepage" style={{marginTop:"120px"}}>
                 <h1 className="Gamepage__title">{game.title}</h1>
                 <div className="Gamepage__content">
                     <div className="Gamepage__left">
                         <iframe style={{width: '90%', height: "400px"}} src={game.video} title="Youtube video player" frameBorder={0}></iframe>
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
             </div> }
        </div>  
    )
  
    
}
  
export {Gamepage};