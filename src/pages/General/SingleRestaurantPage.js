import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react'


export default function SingleRestaurantPage() {

    const [restaurant, setRestaurant] = useState({});
    const { id: resId } = useParams()

    useEffect(() => {
    axios
        .get(`http://localhost:5005/business/${resId}/details`)
        .then((response) => {
            console.log('response.data', response.data.data);
            setRestaurant(response.data.data)
        });
    }, [resId] );

    return(
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.address}</p>
            <p>{restaurant.foodType}</p>
            <p>{restaurant.resType}</p>  
            <p>{restaurant.priceRange}</p>
        </div>
    )
};