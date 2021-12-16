import React from 'react'
import { Link } from "react-router-dom";

const FavouritesCard = (props) => {

    const { restaurant } = props;
    const removeFavourite = ()=>{
        props.handleInput(restaurant._id)
    }
    
    return (
        <div className="restCard__container">
            <Link to={`/restaurants/${restaurant._id}`} className="restCard__link">
                <div className="restCard__topContainer">
                    <img className="restCard__img" src={restaurant.pictures[0]} alt=''></img>
                </div>
            </Link>
                <div className="restCard__bookmarkIconContainer">
                    <button id='delete-button'  onClick={removeFavourite}> <img className="restCard__bookmarkImg" src="/delete-icon.png" alt=''></img></button>
                </div>
                <div className="restCard__bottomContainer">
                    <h2 className="restCard__title">{restaurant.name}</h2>
                    <div className="restCard__infoBar">
                        <div className="restCard__infoBarItem">
                            <img className="restCard__icon" src="/tray.png" alt=''></img>
                            <p>{restaurant.resType}</p>
                        </div>
                        <div className="restCard__infoBarItem">
                            <img className="restCard__icon" src="/restaurant.png" alt=''></img>
                            <p>{restaurant.foodType}</p>
                        </div>
                        <div className="restCard__infoBarItem">
                        <img className="restCard__icon" src="/dollar-tag.png" alt=''></img>
                            <p>{restaurant.priceRange}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default FavouritesCard
