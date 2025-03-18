// Axios
import axios from "axios"

// UseState e useEffect
import { useState, useEffect } from "react"

// Importo Link react-router
// useParams
import { Link, useParams, useNavigate } from "react-router-dom"

// Reviews
import Reviews from "../components/Reviews"

// Form
import ReviewsForm from "../components/ReviewsForm"

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
            <div className="container">
                <section id="movie">
                    <div className="img-box">
                        <img src={movie.image} className="movie-img" alt={movie.title} />
                    </div>
                    <div className="text">
                        <h1>{movie.title}</h1>
                        <h3 className="text-muted">
                            <i>By {movie.director}</i>
                        </h3>
                        <p>{movie.abstract}</p>
                    </div>
                </section>

                <section id="reviews">
                    <h2>Reviews</h2>
                    {renderReviews()}
                </section>

                <section>
                    <ReviewsForm movie_id={movie.id} realoadReviews={getMovieData} />
                </section>

                <footer>
                    <Link className="btn" to="/">Back to home</Link>
                </footer>
            </div>
        </>

    )
}

export default MoviePage