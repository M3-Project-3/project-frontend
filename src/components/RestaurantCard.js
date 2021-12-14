import axios from 'axios';
import React from 'react'
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from "./../context/auth.context";


const API_URL = "http://localhost:5005"

export default function RestaurantCard(props) {
    const { restaurant } = props;
    const {user} = useContext(AuthContext);
    const [favorite, setFavourite] = useState({})

    function addFavorite(){
        axios.put(`${API_URL}/${user._id}/favourites`)
        .then((response)=>{
            
            setFavourite(response)
        })
        

    }

    return (
        <div className="restCard__container">
            <Link to={`/restaurants/${restaurant._id}`} className="restCard__link">
                <div className="restCard__topContainer">
                    <img className="restCard__img" src="stockrestimg.png" alt=''></img>
                <div className="restCard__bookmarkIconContainer">
                    <button className='fav-button' onClick={addFavorite}> <img className="restCard__bookmarkImg" src="bookmark.png" alt=''></img></button>
                </div>
                </div>
                <div className="restCard__bottomContainer">
                    <h2 className="restCard__title">{restaurant.name}</h2>
                    <div className="restCard__infoBar">
                        <div className="restCard__infoBarItem">
                            <img className="restCard__icon" src="tray.png" alt=''></img>
                            <p>{restaurant.resType}</p>
                        </div>
                        <div className="restCard__infoBarItem">
                            <img className="restCard__icon" src="restaurant.png" alt=''></img>
                            <p>{restaurant.foodType}</p>
                        </div>
                        <div className="restCard__infoBarItem">
                        <img className="restCard__icon" src="dollar-tag.png" alt=''></img>
                            <p>{restaurant.priceRange}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
