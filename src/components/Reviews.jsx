const Reviews = ({ propReviews }) => {

    // destructuring delle props
    const { id, name, vote, text } = propReviews

    return (

        <div className="card mb4">
            <div className="card-body">
                <p className="card-text">{text}</p>
                <strong>Vote: {vote}</strong>
                <address><i>By {name}</i></address>
            </div>
        </div>

    )
}

export default Reviews