import axios from "axios";
import React, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import FavouritesCard from "./FavouritesCard";

const API_URL = process.env.REACT_APP_API_URI

export default function Favorites(){
    const [favourites, setFavourites] = useState({})
    const [isLoading, setIsLoading] = useState(true)

  
    const {userId} = useParams();

    console.log(favourites)
    useEffect(()=>{
        axios.get(`${API_URL}/user/${userId}/favourites`)
        .then((response)=>{
            setFavourites(response.data)
            setIsLoading(false)           
        })
    }, [])

    const handleInput = (restaurantId) =>{
        axios.delete(`${API_URL}/user/${userId}/favourites/${restaurantId}` )      
        .then((response)=>{
            console.log(response.data.data)
            setFavourites(response.data.data)
        })    
    }


    return (
        <div>
            <h1>Favourites</h1>
            <div className="homepage__container">

            {isLoading=== false && favourites.map((restaurant => {
                return <FavouritesCard handleInput={handleInput} restaurant={restaurant} key={restaurant._id}  />
            }))}
        </div>
        </div>
    )
}