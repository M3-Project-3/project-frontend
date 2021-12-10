import SearchBar from '../../components/SearchBar';
import { useState, useEffect } from "react";
import axios from 'axios';
import React from 'react'
import RestaurantCard from '../../components/RestaurantCard';

export default function FilterRestaurantsPage() {
    const [restaurants, setRestaurants] = useState([]);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
    axios
        .get("http://localhost:5005/business")
        .then((response) => {
            console.log('response.data', response.data.data);
            setRestaurants(response.data.data)
        });
    }, [] );

    const handleFilterByQuery = (e) => setQuery(e.target.value)

    return (
        <div>
            <h3>List of Restaurants</h3>
            <SearchBar query={query} filterByQuery={handleFilterByQuery} />
            {isLoading}
            {restaurants.map((restaurant => {
                return <RestaurantCard restaurant={restaurant} key={restaurant._id}  />
            }))}
        </div>
    )
}
