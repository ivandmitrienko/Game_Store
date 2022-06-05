import React from "react";

const Gamelist = ({games,title}) => {

  
    return (
              <div>
               {games.map((e) => (
               <div key={e.id}>
                       <h2>{e.title}</h2>
                       <h3>{e.price}</h3>
                </div>
               ))}     
              </div>
          )
  
    
  }
  
  export {Gamelist};