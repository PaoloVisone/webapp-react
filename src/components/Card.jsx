import { Link } from "react-router-dom"

const Card = ({ propCard }) => {

    // Destructuring delle props
    const { id, title, director, genre, release_year, abstract, image } = propCard

    return (

        <div className="card">
            {/* Se img non esiste */}
            <div className="card-body">
                {image && <img src={image} className="card-img" alt={title} />}
                <h3 className="card-title">{title}</h3>
                {/* Se director non esiste */}
                <address><i>Directed by {director || "Anonymous"}</i></address>
                {/* Se abstract non esiste */}
                <p className="card-text">{abstract || "No description"}</p>
                <div className="button-box">
                    <Link to={`movies/${id}`} className="btn ">Go somewhere</Link>
                </div>
            </div>
        </div>
    )


}

export default Card