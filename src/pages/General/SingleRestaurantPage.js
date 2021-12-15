import { useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context"
import BusinessReview from "../../components/BusinessReview";
import BottomNavbarUser from "../../components/BottomNavbarUser";


const API_URI = process.env.REACT_APP_API_URI;

export default function SingleRestaurantPage() {

    const [restaurant, setRestaurant] = useState({});
    const { id: resId } = useParams()
    const {isLoggedIn} = useContext(AuthContext);
    const {user} = useContext(AuthContext)
    const [review, setReview] = useState({})
    const [messageError, setMessageError] = useState()
    const [reviewAdded, setReviewAdded] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
    axios
        .get(`${API_URI}/business/${resId}/details`)
        .then((response) => {
            setRestaurant(response.data.data)
            console.log(response.data.data.menuMain)
        });
    }, [reviewAdded] );

    const handleInput = (e)=>{
        setReview({...review, [e.target.name] : e.target.value})
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setReviewAdded(false)
        setReview({reviewText: " ", rating: " "})
        if(!review.reviewText || !review.rating) setMessageError("All fields are required")
        else{
            const owner = user.name
            const newDate = new Date()
            const date = newDate.getUTCDate() +"/"+ (newDate.getUTCMonth()+1) +"/"+ newDate.getUTCFullYear() + " " + (newDate.getUTCHours()+1) + ":" + newDate.getUTCMinutes() 
            axios.post(`${API_URI}/business/${resId}/review`, {review, owner, date})
            .then((response)=>{
                setReviewAdded(true)
            })
        }
        
    }
    return(

        <div className="singleRest__container">
            <div className="singleRest__imgContainer">
                <img className="singleRest__img" src={restaurant.pictures} alt="Restaurant"></img>
            </div>

            <div className="singleRest__bottomContainer">
                <div className="singleRest__titleContainer">
                    <div className="singleRest__title">
                        <h1>{restaurant.name}</h1>
                    </div>
                </div>
                    
                <div className="restCard__infoBar">
                    <div className="restCard__infoBarItem">
                        <img className="restCard__icon" src="/tray.png" alt=""></img>
                        <p>{restaurant.resType && restaurant.resType.map((type)=>(<span>  {type} </span>))}</p>
                    </div>

                    <div className="restCard__infoBarItem">
                        <img className="restCard__icon" src="/restaurant.png" alt=""></img>
                        <p>{restaurant.foodType && restaurant.foodType.map((type)=>(<span>  {type} </span>))}</p>
                    </div>

                    <div className="restCard__infoBarItem">
                        <img className="restCard__icon" src="/dollar-tag.png" alt=""></img>
                        <p>{restaurant.priceRange}</p>
                    </div>
                </div>

                <div className="singleRest__addressBar">
                    <img className="singleRest__addressIcon" src="/pin.png" alt=""></img>
                    <div className="singleRest__address">
                        <p>{restaurant.address}</p>
                    </div>
                </div>
                <div className="restaurant-description">
                    <p>{restaurant.description}</p>
                 
                </div>
        <div className="menuContainer">
                <h3>Starters</h3>
                    {isLoading === false && restaurant.menuStarters && restaurant.menuStarters.length > 0 ?
                        (
                            <p>
                                {restaurant.menuStarters.map((el)=>{
                                    return (<p><span>{el.menuStarters}</span>....<span>{el.price} €</span></p>)
                                })}
                            </p>
                        ):<span>There are no starters yet</span>
                    }
                    <h3>Main Course</h3>
                    {isLoading === false && restaurant.menuMain && restaurant.menuMain.length > 0 ?
                        (
                            <p>
                                {restaurant.menuMain.map((el)=>{
                                    return (<p><span>{el.menuMain}</span>....<span>{el.price} €</span></p>)
                                })}
                            </p>
                        ):<span>There are no main courses yet</span>
                    }
                    <h3>Deserts</h3>
                    {isLoading === false && restaurant.menuDeserts && restaurant.menuDeserts.length > 0 ?
                        (
                            <p>
                                {restaurant.menuDeserts.map((el)=>{
                                    return (<p><span>{el.menuDeserts}</span>....<span>{el.price} €</span></p>)
                                })}
                            </p>
                        ):<span>There are no deserts yet</span>
                    }
                </div>
                    {isLoggedIn &&
                <div className="singleRest__reservationButtonContainer">
                    <div className="singleRest__reservationButton">
                        <Link to={`/${resId}/reservation/new`} className="singleRest__link">Book a table</Link> 
                    </div>
                </div>
                    }
                <div className="restaurantsReviews">
                <h2 className="singleRest__h2">Reviews</h2>
                {restaurant.reviews && restaurant.reviews.length > 0 ? restaurant.reviews.map((singleReview)=>{
                    return (
                        <BusinessReview review={singleReview} />
                    )
                }):
                <span>Leave the first review!</span>
                }
                </div>
                {isLoggedIn && 
                    <form className="singleRest__reviewFormContainer" onSubmit={handleSubmit}>
                        <h2 className="singleRest__h2">Leave your review</h2>
                        <label for="review">Review</label>
                        <textarea name="reviewText" value={review.reviewText} onChange={handleInput} placeholder="Leave a review!"></textarea>
                        <label for="rating">Rating</label>
                        <input type="number" name="rating" min="0" max="10" value={review.rating} onChange={handleInput} placeholder="/10"></input>                      
                        <button className="review-button" type="submit">Send</button>
                        {messageError && <span>{messageError}</span>}
                    </form>
                }

                
            </div>
       
        </div>
        
    )
};