import React from "react";
import { useEffect, useState, useContext } from 'react';
import { FavoritesContext } from "./AddFavorites";

function GetFavorites() {
  const [favorites] = useContext(FavoritesContext);
    return (
      <div>
        {/* <button onClick={anotherFunction}>Log Favorites</button> */}
        <p>Favorites</p>
        <ul>
          {favorites.map((pokemon, index) => (
            <li key={index}>
              <p>Name: {pokemon.name}</p>
              <img src={pokemon.sprites.back_default}></img>
              <img src={pokemon.sprites.front_default}></img>
            
            </li>
           ))}
        </ul>
      </div>
    );
  }
  
  export default GetFavorites;