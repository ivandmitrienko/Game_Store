import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Gamelist } from './Gamelist/Gamelist.jsx';

export const Category = () => {

    const {genres} = useParams();
    const [games, setGames] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/games?genres=${genres}`)
        .then(res => res.json())
        .then(data => setGames(data))
    }, [genres]);
    
    return (
          <div className='Games'>
            {games && <Gamelist games={games} key={games.id}/>}
        </div>    
    )
}

