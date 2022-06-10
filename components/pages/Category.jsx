import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Gamelist } from './Gamelist/Gamelist.jsx';
import { Button } from '../Button/Button.jsx';

export const Category = () => {

    const {genres} = useParams();
    const [games, setGames] = useState([]);
    const [color, setColor] = useState(0);

    useEffect(() => {
        getGames(1,6);
    }, [genres]);

    const getGames =(numberPage, quantity)=>{
        fetch(`http://localhost:3000/games?genres=${genres}&_page=${numberPage}&_limit=${quantity}`)
        .then(res => res.json())
        .then(data => setGames(data));

    }

    const page = games.length<17?"block":"none";
     
    return (
        <div className='Games'>
            {games && <Gamelist games={games} key={games.id}/>}
            <div className='allButtons'>
                <div style={{display:games.length>17?"none":"block"}}>
                    <Button type = {"third"} onClick={()=>getGames(1,18)}>
                            Показать все
                    </Button>
                </div>
                <div style={{display:games.length<17?"none":"block"}}>
                    <Button type = {"third"} onClick={()=>getGames(1,6)}>
                            Свернуть
                    </Button>
                </div>
                <div style={{display:page}}>
                    <Button type = {color?'fouth':'third'} onClick={()=>{getGames(1,6);setColor(0)}}>
                            1
                    </Button>
                </div>
                <div style={{display:page}}>
                    <Button type = {color===1?'third':'fouth'} onClick={()=>{getGames(2,6);setColor(1)}}>
                            2
                    </Button>
                </div>
                <div style={{display:page}}>
                    <Button type = {color===2?'third':'fouth'} onClick={()=>{getGames(3,6); setColor(2)}}>
                            3
                    </Button>
                </div>
                
            </div>
        </div>    
    )
}

