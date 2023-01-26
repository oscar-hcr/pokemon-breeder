
import { useEffect } from 'react';
import './App.css';
import PokeMenu from './components/PokeMenu'
import PokeSearch from './components/PokeSearch'
import UsernameForm from './components/Dex'
const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

function App() {
    
    
 
    return(
        <div>
            <PokeMenu/>
        <PokeSearch/>

        </div>

    )
}

export default App;
