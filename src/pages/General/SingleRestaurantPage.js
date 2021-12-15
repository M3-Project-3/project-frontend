import { useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context"
import BusinessReview from "../../components/BusinessReview";


const API_URI = process.env.REACT_APP_API_URI;

const SingleRestaurantPage = () => {

    const [restaurant, setRestaurant] = useState({});
    const { id: resId } = useParams()
    const {isLoggedIn} = useContext(AuthContext);
    const {user} = useContext(AuthContext)
    const [review, setReview] = useState({})
    const [messageError, setMessageError] = useState()
    const [reviewAdded, setReviewAdded] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const getBusinessDetails = async () =>{
            try{
                const businessDetails = await axios.get(`${API_URI}/business/${resId}/details`)
                setRestaurant(businessDetails.data.data)
                setIsLoading(false)
            }
            catch(error){
                console.log(error)
            }
        }
        getBusinessDetails()
    }, [reviewAdded] );

    const handleInput = (e)=>{
        setReview({...review, [e.target.name] : e.target.value})
    }
    
    const handleSubmit = async (e) => {
        try{
            e.preventDefault()
            setReviewAdded(false)
            setReview({reviewText: " ", rating: " "})
            if(!review.reviewText || !review.rating) setMessageError("All fields are required")
            else{
                const owner = user.name
                const newDate = new Date()
                const date = newDate.getUTCDate() +"/"+ (newDate.getUTCMonth()+1) +"/"+ newDate.getUTCFullYear() + " " + (newDate.getUTCHours()+1) + ":" + newDate.getUTCMinutes() 
                const newReview = await axios.post(`${API_URI}/business/${resId}/review`, {review, owner, date})
                setReviewAdded(true)
            }
        }
        catch(error){
            console.log(error)
        }
        
    }
    return(

        <div className="singleRest__container">
            <div className="singleRest__imgContainer">
                <img className="singleRest__img" src="/stockrestimg.png" alt="Restaurant"></img>
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
                        <p>{restaurant.resType}</p>
                    </div>

                    <div className="restCard__infoBarItem">
                        <img className="restCard__icon" src="/restaurant.png" alt=""></img>
                        <p>{restaurant.foodType}</p>
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
                <div>
                    <p>{restaurant.description}</p>
                </div>
                <div className="restaurant-menu">
                    
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
                  <h2 className="singleRest__h2">{restaurant.name} Reviews</h2>
                {restaurant.reviews && restaurant.reviews.length > 0 ? restaurant.reviews.map((singleReview)=>{
                    return (
                        <BusinessReview review={singleReview} />
                    )
                }): <span>Leave the first review!</span>}
                {isLoggedIn && <div>
                    <form className="singleRest__reviewFormContainer" onSubmit={handleSubmit}>
                        <h2 className="singleRest__h2">Leave your review</h2>
                        <label for="review">Review</label>
                        <textarea name="reviewText" value={review.reviewText} onChange={handleInput} placeholder="Leave a review!" maxLength="150"></textarea>
                        <label for="rating">Rating</label>
                        <input type="number" name="rating" min="0" max="10" value={review.rating} onChange={handleInput} placeholder="/10"></input>                      
                        <button type="submit">Send</button>
                        {messageError && <span>{messageError}</span>}
                    </form>
                </div>}
                <br/>
                <br/>
                <br/>
                <div className="singleRest__reservationButtonContainer">
                    <div className="singleRest__reservationButton">
                        <Link to={`/${resId}/reservation/new`} className="singleRest__link">Book a table</Link> 
                        {/* this link to the reservation isnt working */}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SingleRestaurantPage