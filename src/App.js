
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/PokeMenu'
import PokeSearch from './components/PokeSearch'
import UsernameForm from './components/Dex'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

function App() {
    return(
       

            <>
            
                <Router>
                <Navbar />
                <Routes>
                <Route path='/' />

                </Routes>
                </Router>
                </>








    )
}

export default App;
