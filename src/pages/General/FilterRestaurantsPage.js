import SearchBar from '../../components/SearchBar';
import { useState, useEffect } from "react";
import axios from 'axios';
import React from 'react'
import RestaurantCard from '../../components/RestaurantCard';
import NotFoundImg from '../../not-found.jpeg'


const API_URI = process.env.REACT_APP_API_URI;

const FilterRestaurantsPage = () => {

    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const getAllBusiness = async () => {
            try{
                const allBusiness = await axios.get(`http://localhost:5005/business`)
                setFilteredRestaurants(allBusiness.data.data)
                setIsLoading(false)
                const setBusinessToShow = filteredRestaurants.find(el=>el.isProfileComplete === true)
                console.log(filteredRestaurants)
            }
            catch(error){
                console.log(error)
            }
        }
        getAllBusiness()
    }, [] );

    const handleFilter = async (string) => {
        try{
            const params = {
                name: string,
                resType: string,
                foodType: string
              }; 
            const search = await axios.get(`${API_URI}/business/search`,{params})
            setIsLoading(false)
            setFilteredRestaurants(search.data)
        }
        catch(error){
            console.log(error)
        }              
    }


    return (
        <div className="homepage__container">
    
            <SearchBar filter={handleFilter} />

            {isLoading === true && <p>Loading...</p>}
            {isLoading === false && filteredRestaurants && filteredRestaurants.length === 0 && <img className='not-found' src={NotFoundImg} alt='Not found' />}
            {isLoading === false && filteredRestaurants && filteredRestaurants.map((restaurant => {
                if(restaurant.isProfileComplete === true){
                    return <RestaurantCard restaurant={restaurant} key={restaurant._id}  />
                }
            }))}
        </div>
    )
}

export default FilterRestaurantsPage
