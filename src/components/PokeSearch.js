import { useEffect, useState } from 'react';
import Capitalize from '../utilities/strings'
import Favorites from '../components/Favorites'

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';


function PokeSearch() {
  const [searchResult, setSearchResult] = useState(null);
  const [pokemon, setPokemon] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}${pokemon.toLowerCase()}`);
      const data = await response.json();
      setSearchResult(data);
    } catch (error) {
      console.error(error);
      alert("Pokemon does not exist.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Pokemon:
          <input
            type="text"
            value={pokemon}
            onChange={(event) => setPokemon(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {searchResult ? (
        <div>
          <p>Name: {Capitalize(searchResult.name)}</p>
          <p>Weight: {searchResult.weight}</p>
          <p>Id: {searchResult.id}</p>
          <p> <img src={searchResult.sprites.front_default}></img></p>
          
          <Favorites pokemon={searchResult.name}/>
        </div>
      ) : (
        <p>Searching...</p>
      )}
    </>
  );
}

export default PokeSearch;