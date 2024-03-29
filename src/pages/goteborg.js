import * as React from "react";
import EventsList from '../components/events.js';
import Footer from "../components/footer";
import Hero from "../components/hero";
import Header from "../components/header";
import Seo from "../components/seo";
// Import from an installed package
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

const location = "Göteborg";

const IndexPage = ({data}) => {
    return (
        <div>
            <Header />
            <Hero location={location} image={"five"} />
            <EventsList eventsData={[]} location={location} />
            <Footer />
        </div>
    )
}

export default IndexPage

export const Head = () => (
  <Seo location={location} url="http://klubbguiden.se/goteborg"/>
)