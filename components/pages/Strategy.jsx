import React from 'react';
import { useState, useEffect } from 'react';
import { Gamelist } from './Gamelist/Gamelist.jsx';

const Strategy = () => {

    const [games, setPost] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/games?genres_like=Strategy`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);
    
    return (
          <div className='Games'>
            {games && <Gamelist games={games} key={games.id}/>}
        </div>    
    )
}

export {Strategy};
