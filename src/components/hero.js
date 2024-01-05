import * as React from "react"
import './hero.css'

// function to get random index
function getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

const Hero = ({location}) => {
    var classArray = ['one', 'two', 'four', 'five'];
    const randomClass = classArray[getRandomIndex(classArray.length)];

    return (
        <div className={`hero ${randomClass}`} id="hero-container">
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

