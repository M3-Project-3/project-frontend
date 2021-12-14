import axios from "axios";
import React, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


import FavouritesCard from "./FavouritesCard";

export default function Favorites(){
    const [favourites, setFavourites] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const API_URL = "http://localhost:5005"
    const {userId} = useParams();


    useEffect(()=>{
        axios.get(`${API_URL}/user/${userId}/favourites`)
        .then((response)=>{
            setFavourites(response.data)
            setIsLoading(false)           
        })
    }, [])


    return (
        <div>
            <h1>Favourites</h1>
            <div className="homepage__container">

            {isLoading=== false && favourites.map((restaurant => {
                return <FavouritesCard restaurant={restaurant} key={restaurant._id}  />
            }))}
        </div>
        </div>
    )
}