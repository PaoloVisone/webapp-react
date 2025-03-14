// Importo react-router
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <nav className="navbar bg-secondary-subtle">
            <div className="container-fluid">
                {/* Link rotta homepage */}
                <Link className="navbar-brand" to="/">Bool Movies</Link>
            </div>
        </nav>
    )
}

export default Header