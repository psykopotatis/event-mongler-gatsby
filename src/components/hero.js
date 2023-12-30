import * as React from "react"
import './hero.css'

const Hero = () => {
    return (
        <div className="hero one" id="hero-container">
            <div className="hero-content darkness">
                <h1 className="hero-title"><span className="red">klubb</span>guiden.se</h1>
                <h2 className="hero-subtitle">
                    Vad händer i helgen? Den bästa guiden till Stockholms klubbar, open airs och technofester! <i
                    className="fa-solid fa-face-grin-beam"></i>
                </h2>
            </div>
        </div>
    )
}

export default Hero

