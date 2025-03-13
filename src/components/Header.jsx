// Importo react-router
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <nav class="navbar bg-secondary-subtle">
            <div class="container-fluid">
                {/* Link rotta homepage */}
                <Link class="navbar-brand" to="/">Bool Movies</Link>
            </div>
        </nav>
    )
}

export default Header