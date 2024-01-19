import * as React from "react"
import './footer.css'

const Footer = () => {
    // Get current date and time
    const now = new Date();
    // Format the date and time
    const formattedDate = now.toISOString().substring(0, 16).replace('T', ' ');


    return (
        <footer className="py-3 my-4 footer">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
            </ul>
            <p className="text-center text-body-secondary">
                Tipsa gärna om fler fester/klubbar  <a href="mailto:psykopotatis@gmail.com">psykopotatis@gmail.com</a> <br/>
                Senast uppdaterad: {formattedDate}
            </p>
        </footer>
    )
}

export default Footer

