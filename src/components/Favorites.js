import axios from "axios";
import React, {useState, useEffect, useContext} from "react";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


export default function Favorites(){
    const [favourites, setFavourites] = useState({})

    const API_URL = "http://localhost:5005"
    const {userId} = useParams();
    console.log(userId)

    useEffect(()=>{
        axios.get(`${API_URL}/user/${userId}/favourites`)
        .then((response)=>{
            setFavourites(response.data)
            console.log(favourites)
            
        })
    }, [])




    return (
        <div>
            <h1>Favourites</h1>
           {/*  <ul>
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
            </ul> */}
        </div>
    )
}