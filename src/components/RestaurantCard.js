import axios from 'axios';
import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "./../context/auth.context";


const API_URL =  process.env.REACT_APP_API_URI;

export default function RestaurantCard(props) {

    const { restaurant } = props;

    const {user} = useContext(AuthContext);

    function addFavorite(){
        axios.put(`${API_URL}/user/${user._id}/favourites/${restaurant._id}` )      

    }

    return (
        
        <div className="restCard__container">
            <Link to={`/restaurants/${restaurant._id}`} className="restCard__link">
                <div className="restCard__topContainer">
                    <img className="restCard__img" src="stockrestimg.png" alt={restaurant.name}></img>
                <div className="restCard__bookmarkIconContainer">
                    <button  onClick={addFavorite}> <img className="restCard__bookmarkImg" src="bookmark.png" alt='bookmark'></img></button>
                </div>
                </div>
                <div className="restCard__bottomContainer">
                    <h2 className="restCard__title">{restaurant.name}</h2>
                    <div className="restCard__infoBar">
                        <div className="restCard__infoBarItem">
                            <img className="restCard__icon" src="tray.png" alt="restaurant type"></img>
                            <p>{restaurant.resType}</p>
                        </div>
                        <div className="restCard__infoBarItem">
                            <img className="restCard__icon" src="restaurant.png" alt="food type"></img>
                            <p>{restaurant.foodType}</p>
                        </div>
                        <div className="restCard__infoBarItem">
                        <img className="restCard__icon" src="dollar-tag.png" alt="price"></img>
                            {!restaurant.priceRange ? <p>Price not available</p>:
                            <p>{restaurant.priceRange}</p>
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
