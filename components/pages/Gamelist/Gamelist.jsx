import React from "react";
import "./Gamelist.css";
import { Gamecover } from '../Gamecover.jsx';
import { Gamebuy } from '../Gamebuy/Gamebuy.jsx';
import { Gamegenre } from '../../Genre/Genre.jsx';

const Gamelist = ({games}) => {

  
    return (      
            <div className="items">
                {games.map((game) => (
                    <div className="game-item" key={game.id}>
                        <Gamecover image={game.image} />
                        <div className="game-item__details">
                            <span className="game-item__title">{game.title}</span>
                            <div className="game-item__genre">
                                <Gamegenre genre={game.genres} key={game.id+1}/>
                            </div>
                            <div className="game-item__buy">
                                <Gamebuy game={game} key={game.id+2}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>        
          )
  
    
  }
  
  export {Gamelist};