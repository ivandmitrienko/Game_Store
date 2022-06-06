import React from "react";
import "./Gamelist.css";
import { Gamecover } from './Gamecover.jsx';

const Gamelist = ({games}) => {

  
    return (      
            <div className="items">
                {games.map((e) => (
                    <div className="game-item" key={e.id}>
                        <Gamecover image={e.image} />
                        <div className="game-item__details">
                            <span className="game-item__title">{e.title}</span>
                            <div className="game-item__genre">
                                {e.genres}
                            </div>
                            <div className="game-item__buy">Buy</div>
                        </div>
                    </div>
                ))}
            </div>        
          )
  
    
  }
  
  export {Gamelist};