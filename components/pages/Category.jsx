import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Gamelist } from './Gamelist/Gamelist.jsx';
import { Button } from '../Button/Button.jsx';

export const Category = () => {

    const {genres} = useParams();
    const [games, setGames] = useState(null);

    useEffect(() => {
        getGames(6);
    }, [genres]);

    const getGames =(quantity)=>{
        fetch(`http://localhost:3000/games?genres=${genres}&_limit=${quantity}`)
        .then(res => res.json())
        .then(data => setGames(data));

    }

    // useEffect(() => {
    //     fetch(`http://localhost:3000/games?genres=${genres}&_limit=6`)
    //     .then(res => res.json())
    //     .then(data => setGames(data))
    // }, [genres]);
    
    return (
          <div className='Games'>
            {games && <Gamelist games={games} key={games.id}/>}
            <div className='allButtons'>
                <Button type = {"third"} onClick={()=>getGames(54)}>
                        Показать все
                </Button>
                <Button type = {"third"} onClick={()=>getGames(54)}>
                        Вперед
                </Button>
                <Button type = {"third"} onClick={()=>getGames(54)}>
                        Назад
                </Button>
            </div>
        </div>    
    )
}

