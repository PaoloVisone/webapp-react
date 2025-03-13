import { Link } from "react-router-dom"

const Card = ({ propCard }) => {

    // Destructuring delle props
    const { id, title, director, genre, release_year, abstract, image } = propCard

    return (

        <div className="card m-4">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <address><i>Directed by {director}</i></address>
                <p className="card-text">{abstract}</p>
                <Link to={`movies/${id}`} className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    )


}

export default Card