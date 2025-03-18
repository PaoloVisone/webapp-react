// Axios
import axios from "axios";
// UseNavigate
import { useNavigate } from "react-router-dom"
// UseState
import { useState } from "react"

const initialObject = {
    title: "",
    director: "",
    image: null,
    abstract: ""
};

const endpointApi = "http://localhost:3000/api/movies";

const CreateMoviePage = () => {

    // navigazione
    const navigate = useNavigate();

    // states iniziali
    const [movieObject, setMovieObject] = useState(initialObject);

    const setNewValue = (e) => {
        const { value, name } = e.target;
        if (name === "image") setMovieObject({ ...movieObject, image: e.target.files[0] });
        else setMovieObject({ ...movieObject, [name]: value });
    }

    // Gestione del submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // // Inviamo i dati al backend con axios e reindirizziamo alla home
        axios.post(endpointApi, movieObject, { headers: { "Content-Type": "multipart/form-data" } })
            .then(
                () => { navigate("/") }
            )
            .catch((err) => {
                console.log(err);
            });
    }


    return (

        <form className="form-movie" onSubmit={handleSubmit}>
            <h1 className="title-form">Create new movie</h1>
            <div className="body-form">
                <label>Title</label>
                <input
                    type="text"
                    className="form-control is-valid"
                    id="validationServer01"
                    placeholder="Title"
                    name="title"
                    value={movieObject.title}
                    onChange={setNewValue}
                    required />

                <label>Director</label>
                <input
                    type="text"
                    className="form-control is-valid"
                    id="validationServer01"
                    placeholder="Director"
                    name="director"
                    value={movieObject.director}
                    onChange={setNewValue}
                    required />

                <label>Description</label>
                <textarea
                    className="form-control"
                    id="validationTextarea"
                    placeholder="Description..."
                    name="abstract"
                    value={movieObject.abstract}
                    onChange={setNewValue}
                    required>
                </textarea>

                <input
                    type="file"
                    className="form-control"
                    aria-label="file example"
                    name="image"
                    onChange={setNewValue}
                    required />
            </div>

            <div className="box-button">
                <button className="btn" type="submit" >Add Movie</button>
            </div>
        </form>

    )
}

export default CreateMoviePage