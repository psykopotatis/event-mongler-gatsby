import * as React from "react";
import EventsList from '../components/events.js';
import Footer from "../components/footer";
import Hero from "../components/hero";
import Header from "../components/header";
import Seo from "../components/seo";
// Import from an installed package
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";


const IndexPage = ({data}) => {
    const location = "Göteborg";

    return (
        <div>
            <Header />
            <Hero location={location}/>
            <EventsList eventsData={[]} location={location} />
            <Footer />
        </div>
    )
}

export default IndexPage

export const Head = () => (
  <Seo />
)