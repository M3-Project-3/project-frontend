import SearchBar from '../../components/SearchBar';
import { useState, useEffect } from "react";
import axios from 'axios';
import React from 'react'
import RestaurantCard from '../../components/RestaurantCard';
import NotFoundImg from '../../not-found.jpeg'

export default function FilterRestaurantsPage() {

    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const API_URL = "http://localhost:5005"

    useEffect(() => {
    axios
        .get(`${API_URL}/business`)
        .then((response) => {
      
            setFilteredRestaurants(response.data.data)
        });
    }, [] );

    function handleFilter( string){

        const params = {
            name: string,
            resType: string,
            foodType: string
          }; 
  
        axios
            .get(`${API_URL}/business/search`,{params})
            .then((response) => { 
                
                    
                setFilteredRestaurants(response.data)
            });   
                
    }


    return (
        <div className="homepage__container">
            {/* <h1>List of Restaurants</h1> */}
            <SearchBar filter={handleFilter} />
            {isLoading}
            {filteredRestaurants.length === 0 && <img className='not-found' src={NotFoundImg} alt='Not found' />}
            {filteredRestaurants.map((restaurant => {
                return <RestaurantCard restaurant={restaurant} key={restaurant._id}  />
            }))}
        </div>
    )
}
