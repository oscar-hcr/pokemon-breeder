import React from "react";
import { useEffect, useState, createContext } from 'react';
import GetFavorites from './getFavorites'

export const FavoritesContext = React.createContext('');

function AddFavorites({pokemon}) {
  const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
    
    function handleClick() {
        setFavorites([...favorites,pokemon]); 
        }

    console.log(favorites);
    
      return (
        <div>
          <button onClick={handleClick} >
            Add to Favorites
          </button>
          <FavoritesContext.Provider value={[favorites, setFavorites]}>
            <GetFavorites/>
          </FavoritesContext.Provider>  
        </div>     
      );
    
}
export default AddFavorites;