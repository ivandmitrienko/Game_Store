import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Cookies from 'js-cookie'
import { Gamecover } from '../Gamecover.jsx';
import { Gamebuy } from '../Gamebuy/Gamebuy.jsx';
import { Gamegenre } from '../../Genre/Genre.jsx';
import { setCurrentGame } from '../../Redux/Games/reducer';
import "./Gamelist.css";

const Gamelist = ({games}) => {

    // Cookies.set('name', 'value', {sameSite: 'Strict', secure: true});

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const handleClick = () => { dispatch(setCurrentGame(games));
    // navigate(`/${games.title}`);} //игра сразу же окажется в redux и переместится на другую страницу 
    

    return (      
            <div className="items">
                {games.map((game) => (
                    <div className="game-item" key={game.id} onClick={() => { dispatch(setCurrentGame(game));
                        navigate(`/game/${game.id}`);}}>
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