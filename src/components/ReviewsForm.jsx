// use state
import { useState } from "react"

const ReviewsForm = () => {

    const initialValue = { name: "", text: "", vote: 1 };

    // Variabile di stato
    const [formData, setFormData] = useState(initialValue)

    // Funzione di gestiostione valori del form
    const setNewValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    return (

        // Form
        <div className="card">
            <header className="card-header">
                <h5>Add your review</h5>
            </header>
            <div className="card-body">
                <form onSubmit={submitReview}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setNewValue} />
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea className="form-control" name="text" value={formData.text} onChange={setNewValue} ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Voto</label>
                        <input type="number" min="1" max="5" className="form-control" name='vote' value={formData.vote} onChange={setNewValue} />
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-primary">
                            Send
                        </button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default ReviewsForm