const Reviews = ({ propReviews }) => {

    // destructuring delle props
    const { name, vote, text } = propReviews

    return (

        <div className="card-rewiews">
            <div className="card-review">
                <strong>Vote: {vote}</strong>
                <p className="card-text">{text}</p>
                <address><i>By {name}</i></address>
            </div>
        </div>

    )
}

export default Reviews