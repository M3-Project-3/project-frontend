import React from 'react'

export default function RestaurantCard(props) {
    const { restaurant } = props;

    return (
        <div className="restCard__container">
            <img className="restCard__img" src="stockrestimg.png"></img>
            <div className="restCard__content">
                <h2 className="restCard__title">{restaurant.name}</h2>
                <div className="restCard__infoBar">
                    {/* <p>{restaurant.resType}</p> */}
                    <div className="restCard__infoBarItem">
                        <img className="restCard__icon" src="tray.png"></img>
                        <p>{restaurant.resType}</p>
                    </div>
                    <div className="restCard__infoBarItem">
                        <img className="restCard__icon" src="restaurant.png"></img>
                        <p>{restaurant.foodType}</p>
                    </div>
                    <div className="restCard__infoBarItem">
                    <img className="restCard__icon" src="dollar-tag.png"></img>
                        <p>{restaurant.priceRange}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
