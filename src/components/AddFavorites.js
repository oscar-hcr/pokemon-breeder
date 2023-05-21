import React from "react";
import { useEffect, useState } from 'react';
import GetFavorites from './getFavorites'


function AddFavorites({pokemon}) {
    const [favorites, setFavorites] = useState([]);
    
    function handleClick() {
        setFavorites([...favorites,pokemon]);
      //  const updatedFavorites=setFavorites
      //    alert(JSON.stringify(updatedFavorites))
      //   console.log(updatedFavorites)
      //    return getFavorites(updatedFavorites)
          
        }
                console.log(favorites)
    

      return (
        <div>
            <button onClick={handleClick} >
              Add to Favorites
            </button>
            <GetFavorites favorites={favorites} />
            
        </div>



            
      );
    
}

// export default function getFavorites(favorites){
//   console.log(favorites);
//   return favorites;
  
// }



export default AddFavorites;