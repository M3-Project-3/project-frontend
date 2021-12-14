import React, {useState, useEffect, useContext} from "react";


export default function Favorites(){
    const [favourites, setFavorites] = useState([]);


    useEffect(()=>{
        setFavorites()
    }, [])

    function handleFavorite(id){
        const newFavorites = favourites.map(restaurant=>{
            return restaurant.id = id ? {...restaurant, favorite: restaurant.favorite} : restaurant;
        })
        setFavorites(newFavorites)
    }

    return (
        <div>
            <h1>favorites</h1>
            <ul>
                {favourites.map((restaurant, fav) => (
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