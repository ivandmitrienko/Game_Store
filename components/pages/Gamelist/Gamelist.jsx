import React from "react";
import "./Gamelist.css";
import { Gamecover } from '../Gamecover.jsx';
import { Gamebuy } from '../Gamebuy/Gamebuy.jsx';

const Gamelist = ({games}) => {

  
    return (      
            <div className="items">
                {games.map((game) => (
                    <div className="game-item" key={game.id}>
                        <Gamecover image={game.image} />
                        <div className="game-item__details">
                            <span className="game-item__title">{game.title}</span>
                            <div className="game-item__genre">
                                {game.genres}
                            </div>
                            <div className="game-item__buy">
                                <Gamebuy game={game} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>        
          )
  
    
  }
  
  export {Gamelist};