const BusinessReview = (props) => {
    
    const review = props.review
    
    return (
        <>
            <div>
                <span>{review.owner}</span>   <span>{review.date}</span>
                <br></br>
                <span>Rating:{review.rating}</span>
                <p>{review.review}</p>
                <br></br>
            </div>
        </>
    )
}
export default BusinessReview