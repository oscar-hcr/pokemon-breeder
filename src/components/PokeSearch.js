import { useEffect, useState } from 'react';
import Capitalize from '../utilities/strings'
import AddFavorites from './AddFavorites'

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

  useEffect(() => {
    const storedPokemon = localStorage.getItem('pokemon');
    if (storedPokemon) {
      setPokemon(storedPokemon);
    }
  }, []);

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setPokemon(userInput);
    localStorage.setItem('pokemon', userInput);
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
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {searchResult ? (
        <div>
          <p>Name: {Capitalize(searchResult.name)}</p>
          <p>Weight: {searchResult.weight}</p>
          <p>Id: {searchResult.id}</p>
          <p> 
            <img src={searchResult.sprites.back_default}></img>
            <img src={searchResult.sprites.front_default}></img>
          </p>  
          <AddFavorites pokemon={searchResult}/>
        </div>
      ) : (
        <p>Searching...</p>
      )}
    </>
  );
}

export default PokeSearch;