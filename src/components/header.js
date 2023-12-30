import * as React from "react"

const Header = ({location}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">klubbguiden.se</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="/stockholm">Stockholm</a></li>
                        <li className="nav-item"><a className="nav-link" href="/goteborg">Göteborg</a></li>
                        <li className="nav-item"><a className="nav-link" href="/malmo">Malmö</a></li>
                    </ul>
                </div>
            </div>
        </nav>
)
}

export default Header

