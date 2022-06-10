import React from 'react';
import { useState, useEffect } from 'react';
// import { ButtonsPaginate } from '../ButtonsPaginate/ButtonsPaginate.jsx';
import { Gamelist } from './Gamelist/Gamelist.jsx';
const Homepage = () => {

    let [games, setLimitGames] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/games`)
        .then(res => res.json())
        .then(data => setLimitGames(data))
    }, []);

    // ?&_limit=18 
    
    return (
        <div className='Games'>  
            {games && <Gamelist games={games} key={games.id}/>}
        </div>
       
            
    )
}

export {Homepage}
