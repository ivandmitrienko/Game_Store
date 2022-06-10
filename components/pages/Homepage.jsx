import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '../Button/Button.jsx';
import { Gamelist } from './Gamelist/Gamelist.jsx';

const Homepage = () => {

    const [games, setLimitGames] = useState(null);

    useEffect(() => {
        getGames(6);
    }, []);

   

    const getGames =(quantity)=>{
        fetch(`http://localhost:3000/games?_limit=${quantity}`)
        .then(res => res.json())
        .then(data => setLimitGames(data))

    }

    //TODO удалить кнопку

    // ?&_limit=18 

    return (
        <div className='Games'>  
            <h1>Избранное</h1>
            {games && <Gamelist games={games} key={games.id}/>}
            <Button type = {"third"}>Показать все</Button> 
        </div>
        
       
            
    )
}

export {Homepage}
