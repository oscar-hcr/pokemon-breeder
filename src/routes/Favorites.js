import React from 'react'
import GetFavorites from '../components/AddFavorites';

function FavoritePokemon() {
    return (
        <div className='favorites'>
            <h1>Favorites</h1>
            <GetFavorites />
        </div>


    )

}
export default FavoritePokemon;