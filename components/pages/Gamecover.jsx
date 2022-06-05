import React from 'react';
import "./Gamecover.css";

const Gamecover = ({image = ""}) => {

    return (
        <div className='game-cover' style={{backgroundImage:`url(../public/${image})`}}/>
    )
}

export {Gamecover};
