import React from 'react'
import { useContext } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
import { AuthContext } from '../context/auth.context';

const API_URL =  process.env.REACT_APP_API_URI;

export default function FavouritesCard(props) {

    const { restaurant } = props;
    const {user} = useContext(AuthContext)
  

    function removeFavourite(){
        axios.delete(`${API_URL}/user/${user._id}/favourites/${restaurant._id}` )      
        .then(()=>{
            window.location.reload();
        })    
    }

    return (
        <div className="restCard__container">
            <Link to={`/restaurants/${restaurant._id}`} className="restCard__link">
                <div className="restCard__topContainer">
                    <img className="restCard__img" src="/stockrestimg.png" alt=''></img>
                </div>
            </Link>
                <div className="restCard__bookmarkIconContainer">
                    <button  onClick={removeFavourite}> <img className="restCard__bookmarkImg" src="/delete-icon.png" alt=''></img></button>
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
            
        </div>
    )
}
