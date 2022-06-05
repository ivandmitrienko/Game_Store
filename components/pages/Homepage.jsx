import React from 'react';
import { useState, useEffect } from 'react';
import { Gamelist } from './Gamelist.jsx';


const Homepage = () => {

    const [games, setPost] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/games`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);

    return (
        <div>
            <h1>Our Games</h1>
            {games && <Gamelist games={games} title = "Blog"/>}
        </div>
    )
}

export {Homepage}
