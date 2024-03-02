import * as React from "react"
import './hero.css'

const Hero = ({location, image}) => {

    return (
        <div className={`hero ${image}`} id="hero-container">
            <div className="hero-content darkness">
                <h1 className="hero-title"><span className="red">{location}</span></h1>
                <h2 className="hero-subtitle">
                    Vad händer i helgen? Den bästa guiden till {location}s klubbar, open airs och technofester! <i
                    className="fa-solid fa-face-grin-beam"></i>
                </h2>
            </div>
        </div>
    )
}

export default Hero

