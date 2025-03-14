// Axios
import axios from "axios"

// UseState e useEffect
import { useState, useEffect } from "react"

// Importo Link react-router
// useParams
import { Link, useParams, useNavigate } from "react-router-dom"

import Reviews from "../components/Reviews"

const MoviePage = () => {

    // Recuperiamo l'id grazie as useParams
    const { id } = useParams();

    // Redirect
    const redirect = useNavigate()

    // Settiamo lo stato del componente prendendo il singolo elemento (oggetto)
    const [movie, setMovie] = useState({})

    // Chiamata Api + id
    const getMovieData = () => {
        axios.get("http://localhost:3000/api/movies/" + id)
            .then(
                res => {
                    // Cambia lo stato
                    setMovie(res.data)
                }
            )
            // Se c'è un errore
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect('/*')

            })
    }

    // Al rendering faccio partire la richiesta dati
    useEffect(getMovieData, [])

    // Funzione di rendering Reviews
    const renderReviews = () => {
        return movie.reviews?.map(
            review => <Reviews key={review.id} propReviews={review} />
        )
    }

    return (
        <>
            <section id="movie" className="border-bottom border-1 d-flex mb-3 h-75">
                <div className="d-flex mb-3">
                    <img src={movie.image} className="movie-img img-thumbnail" alt={movie.title} />
                </div>
                <div className="text p-4 ">
                    <h1>{movie.title}</h1>
                    <h3 className="text-muted">
                        <i>By {movie.director}</i>
                    </h3>
                    <p>{movie.abstract}</p>
                </div>
            </section>

            <section id="reviews" className="mb-4">
                <h4>Reviews</h4>
                {renderReviews()}
            </section>

            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>

    )
}

export default MoviePage