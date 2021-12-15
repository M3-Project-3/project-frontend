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
        const apiRequest = async () => {
            try{
                const request = await axios.get(`${API_URL}/user/${userId}/favourites`)
                setFavourites(request.data)
                setIsLoading(false)           
            }
            catch(error){
                console.log(error)
            }
        }
        apiRequest()
    }, [userId])

    const handleInput = async (restaurantId) =>{
        try{
            const deleteFav = await axios.delete(`${API_URL}/user/${userId}/favourites/${restaurantId}` )
            setFavourites(deleteFav.data.data)
        }
        catch(error){
            console.log(error)
        }  
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

export default Favorites