import { Link } from "react-router-dom"

const Card = () => {
    return (

        <div class="card">
            <img src="http://localhost:3000/movies_cover/inception.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <address><i>Lorem ipsum dolor sit amet.</i></address>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="movies/1" class="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    )


}

export default Card