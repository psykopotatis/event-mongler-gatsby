import * as React from "react"

const Footer = () => {
    return (
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
            </ul>
            <p className="text-center text-body-secondary">Senast uppdaterad .... Tipsa gärna om fler
                fester/klubbar på <a href="mailto:technofest01@gmail.com">technofest01@gmail.com</a></p>
        </footer>
    )
}

export default Footer

