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

        <form class="was-validated" onSubmit={handleSubmit}>
            <h1>Create new movie</h1>
            <div class="md-3">
                <label for="validationServer01" class="form-label">Title</label>
                <input
                    type="text"
                    class="form-control is-valid"
                    id="validationServer01"
                    placeholder="Title"
                    name="title"
                    value={movieObject.title}
                    onChange={setNewValue}
                    required />
                <div class="invalid-feedback">
                    Please enter a title.
                </div>
            </div>

            <div class="md-3">
                <label for="validationServer01" class="form-label">Director</label>
                <input
                    type="text"
                    class="form-control is-valid"
                    id="validationServer01"
                    placeholder="Director"
                    name="director"
                    value={movieObject.director}
                    onChange={setNewValue}
                    required />
                <div class="invalid-feedback">
                    Please enter a name director.
                </div>
            </div>

            <div class="mb-3">
                <label for="validationTextarea" class="form-label">Description</label>
                <textarea
                    class="form-control"
                    id="validationTextarea"
                    placeholder="Description..."
                    name="abstract"
                    value={movieObject.abstract}
                    onChange={setNewValue}
                    required>
                </textarea>
                <div class="invalid-feedback">
                    Please enter a message in the textarea.
                </div>
            </div>

            <div class="mb-3">
                <input
                    type="file"
                    class="form-control"
                    aria-label="file example"
                    name="image"
                    onChange={setNewValue}
                    required />
                <div class="invalid-feedback">Example invalid form file feedback</div>
            </div>

            <div class="mb-3">
                <button class="btn btn-primary" type="submit" disabled>Add Movie</button>
            </div>
        </form>

    )
}

export default CreateMoviePage