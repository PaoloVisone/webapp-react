// UseState e useEffect
import { useState, useEffect } from "react"

// Axios
import axios from "axios"

// Card
import Card from "../components/Card"

const HomePage = () => {

    // Stato del componente
    const [movies, setMovies] = useState([])

    // Chiamata al DB
    const getMoviesData = () => {
        axios.get("http://localhost:3000/api/movies/")
            .then(
                res => {
                    // Cambia lo stato
                    setMovies(res.data)
                }
            )
            .catch(err => console.log(err))
    }

    // Al rendering faccio partire la richiesta dati
    useEffect(getMoviesData, [])

    // Rendering Function
    const renderMovies = () => {
        return movies.map(
            movie => {
                return (
                    <div className="col">
                        <Card propCard={movie} key={movie.id} />
                    </div>
                )
            }
        )
    }

    return (
        <>

            <h1 className="text-dark text-center">Bool Movie</h1>

            <div className="row row-cols-3 mt-4">

                {renderMovies()}
            </div>
        </>

    )
}

export default HomePage