// Importo react-router
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <nav className="navbar bg-secondary-subtle">
            <div className="container-fluid">
                {/* Link rotta Homepage */}
                <Link className="navbar-brand" to="/">Bool Movies</Link>
                {/* Link rotta Create */}
                <Link className="btn btn-dark" to="/movies/create">add movie</Link>
            </div>
        </nav>
        //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <div class="container-fluid">
        //       <a class="navbar-brand" href="#">Navbar</a>
        //       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //       </button>
        //       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        //         <div class="navbar-nav">
        //           <a class="nav-link active" aria-current="page" href="#">Home</a>
        //           <a class="nav-link" href="#">Features</a>
        //           <a class="nav-link" href="#">Pricing</a>
        //           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        //         </div>
        //       </div>
        //     </div>
        //   </nav>
    )
}

export default Header