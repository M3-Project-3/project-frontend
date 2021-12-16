import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import FavouritesCard from "./FavouritesCard";

const API_URL = process.env.REACT_APP_API_URI

const Favorites = () => {
    const [favourites, setFavourites] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const {userId} = useParams();

    useEffect(()=>{
        axios.get(`${API_URL}/user/${userId}/favourites`)
        .then((response)=>{
            setFavourites(response.data)
            setIsLoading(false)           
        })
    }, [userId])

    const handleInput = (restaurantId) =>{
        axios.delete(`${API_URL}/user/${userId}/favourites/${restaurantId}` )      
        .then((response)=>{
        setFavourites(response.data.data)
        })    
    }

    return (
        <div>
            <h1 className="favTitle">Favourites</h1>
            <div className="homepage__container">
                {isLoading === false && favourites.length > 0 ? favourites.map((restaurant => {
                return <FavouritesCard handleInput={handleInput} restaurant={restaurant} key={restaurant._id}  />
                }))
                : <span>You don't have any favourites yet!</span>
                }
            </div>
        </div>
    )
}

export default Favorites