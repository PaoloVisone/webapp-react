// Importo react-router
import { Link } from "react-router-dom"

import Reviews from "../components/Reviews"

const MoviePage = () => {
    return (
        <>
            <section id="movie" className="border-bottom border-1 d-flex mb-3">
                <div className="d-flex mb-3">
                    <img src="http://localhost:3000/movies_cover/inception.jpg" class="movie-img" alt="..." />
                </div>
                <div className="text p-4 ">
                    <h1>Titolo</h1>
                    <h3 className="text-muted">
                        <i>By </i>
                    </h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </section>

            <section id="reviews" className="mb-4">
                <h4>Reviews</h4>
                <Reviews />
                <Reviews />
                <Reviews />
            </section>

            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>

    )
}

export default MoviePage