import React from 'react';
import { useState, useEffect } from 'react';
import { Gamelist } from './Gamelist/Gamelist.jsx';

const Fantasy = () => {

    const [games, setPost] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/games?genres_like=Fantasy`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);
    
    return (
          <div className='Games'>
            {games && <Gamelist games={games} key={games.id}/>}
        </div>    
    )
}

export {Fantasy};
