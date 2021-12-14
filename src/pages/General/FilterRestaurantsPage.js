import SearchBar from '../../components/SearchBar';
import { useState, useEffect } from "react";
import axios from 'axios';
import React from 'react'
import RestaurantCard from '../../components/RestaurantCard';
import NotFoundImg from '../../not-found.jpeg'


const API_URI = process.env.REACT_APP_API_URI;

export default function FilterRestaurantsPage() {

    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
    axios
        .get(`${API_URI}/business`)
        .then((response) => {
      
            setFilteredRestaurants(response.data.data)
            setIsLoading(false)
        });
    }, [] );

    function handleFilter( string){

        const params = {
            name: string,
            resType: string,
            foodType: string
          }; 
  
        axios
            .get(`${API_URI}/business/search`,{params})
            .then((response) => { 
                
                setIsLoading(false)
                setFilteredRestaurants(response.data)
            });   
                
    }


    return (
        <div className="homepage__container">
    
            <SearchBar filter={handleFilter} />

            {isLoading === true &&<p>Loading...</p>}
            {isLoading === false && filteredRestaurants.length === 0 && <img className='not-found' src={NotFoundImg} alt='Not found' />}
            {filteredRestaurants.map((restaurant => {
                return <RestaurantCard restaurant={restaurant} key={restaurant._id}  />
            }))}
        </div>
    )
}
