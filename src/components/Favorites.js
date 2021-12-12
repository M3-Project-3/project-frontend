import React, {useState, useEffect} from "react";

const restaurantsData =  [{data}]  // need to import restaurants data from the seed js

export default function Favorites(){
    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{
        setFavorites(restaurantsData)
    }, [])

    function handleFavorite(id){
        const newFavorites = favorites.map(restaurant=>{
            return restaurant.id = id ? {...restaurant, favorite: restaurant.favorite} : restaurant;
        })
        setFavorites(newFavorites)
    }

    return (
        <div>
            <h1>favorites</h1>
            <ul>
                {favorites.map((restaurant, fav) => (
                    <li key={fav}>
                        {restaurant.name}
                        <button onClick={()=>{
                            handleFavorite(restaurant.id)
                        }}>
                            {restaurant.favorite === true ? "remove" : "add"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}