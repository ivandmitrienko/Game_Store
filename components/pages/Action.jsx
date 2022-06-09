import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Gamelist } from './Gamelist/Gamelist.jsx';

const Action = () => {

    const params = useParams();
    console.log(params);

    const [games, setPost] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/games?genres_like=Action`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);
    
    return (
          <div className='Games'>
            {games && <Gamelist games={games} key={games.id}/>}
        </div>    
    )
}

export {Action};
