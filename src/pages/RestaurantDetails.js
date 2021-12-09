import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import axios from "axios";

export default function RestaurantDetails(props){

    const id = useParams().id
    
    const [isLoading, setIsLoading] = useState(true)
    const [restaurant, setRestaurant] = useState({})

    return(
        <div>
            <header>
                {/* <Link to='/'></Link> */}
            </header>
            {isLoading === false &&
                <div>
                        <div>{restaurant.name}</div>
                        <div>{restaurant.email}</div>
                        <div>{restaurant.resType}</div>
                        <div>{restaurant.foodType}</div>
                        <div>{restaurant.menuStarters}</div>
                        <div>{restaurant.menuMain}</div>
                        <div>{restaurant.menuDeserts}</div>
                        <div>{restaurant.priceRange}</div>
                        <div>{restaurant.timetable}</div>
                        <div>{restaurant.tables}</div>
                        <div>{restaurant.userType}</div>
                        <div><img src={restaurant.pictures} alt={restaurant.name} height="200px"></img></div>


                    </div>
            }
        </div>
    )

}