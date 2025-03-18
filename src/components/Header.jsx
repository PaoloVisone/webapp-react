// Importo react-router
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <nav className="navbar">
            <div className="container-navbar">

                <div className="title">
                    <h1 className="text-dark text-center">Bool Movie</h1>
                </div>

                <div className="link">
                    {/* Link rotta Homepage */}
                    <Link className="btn" to="/">Home</Link>


                    {/* Link rotta Create */}
                    <Link className="btn " to="/movies/create">Add Movie</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header