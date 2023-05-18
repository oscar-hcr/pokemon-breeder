import React from "react";
import { useEffect, useState } from 'react';

function Favorites(pokemon) {
    const [favorites, setFavorites] = useState([]);
    
    function handleClick() {
        setFavorites([
            ...favorites,
          pokemon
          ]);
          alert(JSON.stringify(favorites))
        }
                console.log(favorites)
    

      return (
        

        <button onClick={handleClick} >
          Add to Favorites
        </button>
        
      );
    
}


function getFavorites(arr){
    console.log(favorites);
}


export default Favorites;