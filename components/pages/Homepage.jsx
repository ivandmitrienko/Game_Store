import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '../Button/Button.jsx';
import { Gamelist } from './Gamelist/Gamelist.jsx';

const Homepage = () => {

    const [games, setLimitGames] = useState([]);

    useEffect(() => {
        getGames(6);
    }, []);

    const getGames =(quantity)=>{
        fetch(`http://localhost:3000/games?_limit=${quantity}`)
        .then(res => res.json())
        .then(data => setLimitGames(data));

    }

    return (
        <div className='Games'>  
            <h1>Избранное</h1>
            {games && <Gamelist games={games} key={games.id}/>}
            <div style={{display:games.length>7?"none":"block"}}>
                <Button type = {"third"} onClick={()=>getGames(54)}>
                    Показать все
                </Button>
            </div> 
        </div>
        
       
            
    )
}

export {Homepage}
