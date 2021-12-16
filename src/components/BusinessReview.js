const BusinessReview = (props) => {
    
    const review = props.review
    
    return (
        <>
            <div>
                <p> <strong>{review.owner}</strong>  {review.date}</p>
                    <span> <strong> Rating: </strong>{review.rating}</span>
                <p>"{review.review}"</p>
                <hr/>
            </div>
        </>
    )
}

export default BusinessReview 