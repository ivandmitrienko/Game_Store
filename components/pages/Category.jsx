import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Gamelist } from './Gamelist/Gamelist.jsx';

export const Category = () => {

    const params = useParams();
    console.log(params);

    const [games, setGames] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/games?genres=${params.type}`)
        .then(res => res.json())
        .then(data => {console.log(data);setGames(data);})
    }, []);
    
    return (
          <div className='Games'>
            {games && <Gamelist games={games} key={games.id}/>}
        </div>    
    )
}

