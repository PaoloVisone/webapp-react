import { Link } from "react-router-dom"

const Card = ({ propCard }) => {

    // Destructuring delle props
    const { id, title, director, genre, release_year, abstract, image } = propCard

    return (

        <div className="card m-4">
            {/* Se img non esiste */}
            {image && <img src={image} className="card-img-top" alt={title} />}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {/* Se director non esiste */}
                <address><i>Directed by {director || "Anonymous"}</i></address>
                {/* Se abstract non esiste */}
                <p className="card-text">{abstract || "No description"}</p>
                <Link to={`movies/${id}`} className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    )


}

export default Card