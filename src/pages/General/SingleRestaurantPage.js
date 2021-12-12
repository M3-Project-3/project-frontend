import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react'
import { Link } from "react-router-dom";


export default function SingleRestaurantPage() {

    const [restaurant, setRestaurant] = useState({});
    const { id: resId } = useParams()

    console.log(resId);

    useEffect(() => {
    axios
        .get(`http://localhost:5005/business/${resId}/details`)
        .then((response) => {
            console.log('response.data', response.data.data);
            setRestaurant(response.data.data)
        });
    }, [resId] );

    return(
        <div className="singleRest__container">
            <div className="singleRest__imgContainer">
                <img className="singleRest__img" src="/stockrestimg.png"></img>
            </div>

                <div className="singleRest__title">
                    <h1>{restaurant.name}</h1>
                </div>
                    
                    <div className="restCard__infoBar">
                        <div className="restCard__infoBarItem">
                            <img className="restCard__icon" src="/tray.png"></img>
                            <p>{restaurant.resType}</p>
                        </div>

                            <div className="restCard__infoBarItem">
                                <img className="restCard__icon" src="/restaurant.png"></img>
                                <p>{restaurant.foodType}</p>
                            </div>

                                <div className="restCard__infoBarItem">
                                    <img className="restCard__icon" src="/dollar-tag.png"></img>
                                    <p>{restaurant.priceRange}</p>
                                </div>
                    </div>

                        <div className="singleRest__addressBar">
                            <img className="singleRest__addressIcon" src="/pin.png"></img>
                                <div className="singleRest__address">
                                    <p>{restaurant.address}</p>
                                </div>
                        </div>
                            <br/>
                            <br/>
                            <br/>
                            <div className="singleRest__reservationButtonContainer">
                                <div className="singleRest__reservationButton">
                                    <Link to="/ReservationForm" className="singleRest__link">Book a table</Link>
                                </div>
                            </div>
        </div>
    )
};