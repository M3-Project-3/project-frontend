import axios from 'axios';
import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "./../context/auth.context";


const API_URL =  process.env.REACT_APP_API_URI;

const RestaurantCard = (props) => {

    const { restaurant } = props;
    console.log('props',props.restaurant.pictures)

    const {user} = useContext(AuthContext);

    const addFavorite = () => {
        axios.put(`${API_URL}/user/${user._id}/favourites/${restaurant._id}` )      

    }
console.log("testpics", restaurant)
    return (

        <div className="restCard__container">
            
                <div className="restCard__topContainer">
                <Link to={`/restaurants/${restaurant._id}`} className="restCard__link" >
                    {restaurant.pictures && restaurant.pictures.length > 0 &&
                    <img className="restCard__img" src={restaurant.pictures[0]} alt={restaurant.name}/>
                    }
                    </Link>
                <div className="restCard__bookmarkIconContainer">
                    <button className="restCard__bookmarkIconButton"  onClick={addFavorite}> <img className="restCard__bookmarkImg" src="bookmark.png" alt='bookmark'></img></button>
                </div>
                </div>
                <div className="restCard__bottomContainer">
                    <h2 className="restCard__title">{restaurant.name}</h2>
                    <div className="restCard__infoBar">
                        <div className="restCard__infoBarItem">
                            <img className="restCard__icon" src="tray.png" alt="restaurant type"></img>
                            <p>{restaurant.resType[0]}</p>
                        </div>
                        <div className="restCard__infoBarItem">
                            <img className="restCard__icon" src="restaurant.png" alt="food type"></img>
                            <p>{restaurant.foodType[0]}</p>
                        </div>
                        <div className="restCard__infoBarItem">
                        <img className="restCard__icon" src="dollar-tag.png" alt="price"></img>
                            {!restaurant.priceRange ? <p>Price not available</p>:
                            <p>{restaurant.priceRange}</p>
                            }
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default RestaurantCard
