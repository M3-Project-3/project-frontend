import SearchBar from '../../components/SearchBar';
import { useState, useEffect } from "react";
import axios from 'axios';

import React from 'react'
import RestaurantCard from '../../components/RestaurantCard';

export default function FilterRestaurantsPage() {

    const [restaurants, setRestaurants] = useState([]);
    
    useEffect(() => {
    axios
        .get("http://localhost:5005/business")
        .then((response) => {
            console.log('response.data', response.data.data);
            setRestaurants(response.data.data)
        });
    }, [] );

    return (
        <div>
            <SearchBar/>
            <h3>List of Restaurants</h3>
            {restaurants.map(restaurant => {
                return <RestaurantCard key={restaurant._id} restaurant={restaurant} />
            }
            )}
        </div>
    )
}
