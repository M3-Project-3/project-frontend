import React from 'react'

export default function RestaurantCard(props) {
    const { restaurant } = props;

    return (
        <div className="rest-card">
            {/* <img src=""></img> */}
            <p>{restaurant.name}</p>
            <p>{restaurant.address}</p>
            <p>{restaurant.foodType}</p>
            <p>{restaurant.resType}</p>  
            <p>{restaurant.priceRange}</p>
        </div>
    )
}
