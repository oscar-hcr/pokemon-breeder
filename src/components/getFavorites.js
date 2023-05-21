import React from "react";
import { useEffect, useState } from 'react';

function GetFavorites({ favorites }) {

    // Use the favorites array in your function logic
    function anotherFunction() {
        alert(JSON.stringify(favorites))

    }
  
    // Render the component or use the favorites array as needed
    return (
      <div>

        <button onClick={anotherFunction}>Log Favorites</button>
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