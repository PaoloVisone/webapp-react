// use state
import { useState } from "react"

const ReviewsForm = ({ movie_id, realoadReviews }) => {

    const initialValue = { name: "", text: "", vote: 1 };

    // Variabile di stato
    const [formData, setFormData] = useState(initialValue)

    // Funzione di gestiostione valori del form
    const setNewValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // Url
    const endpoint = `http://localhost:3000/api/movies/${movie_id}/reviews`;

    // Funzione di gestione submit
    const submitReview = (e) => {
        e.preventDefault();

        // Chimata Axios
        axios.post(endpoint, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(
                () => {
                    setFormData(initialValue)
                    realoadReviews()
                }
            )
            .catch(err => console.log(err)
            )

    }


    return (

        // Form
        <div className="box-form">
            <header className="title-form">
                <h1>Add your review</h1>
            </header>
            <div className="body-form">
                <form onSubmit={submitReview}>
                    <label for="name">Name</label>
                    <input type="text" name="name" className="form-control" value={formData.name} onChange={setNewValue} />

                    <label>Voto</label>
                    <input type="number" min="1" max="5" className="form-control" name='vote' value={formData.vote} onChange={setNewValue} />

                    <label>Review</label>
                    <textarea className="form-control" name="text" value={formData.text} onChange={setNewValue} ></textarea>

                    <div className="box-button">
                        <button type="submit" className="btn">
                            Send
                        </button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default ReviewsForm