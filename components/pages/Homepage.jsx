import React from 'react';
import { useState, useEffect } from 'react';
import { Gamelist } from './Gamelist/Gamelist.jsx';


const Homepage = () => {

    const [games, setPost] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/games`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);

    return (
        <div className='Homepage'>
            {games && <Gamelist games={games} key={games.id}/>}
        </div>
    )
}

export {Homepage}
