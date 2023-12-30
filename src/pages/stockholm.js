import * as React from "react";
import EventsList from '../components/events.js';
import {graphql} from "gatsby";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Header from "../components/header";
import Seo from "../components/seo";
// Import from an installed package
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";


const IndexPage = ({data}) => {
    const location = "Stockholm";

    return (
        <div>
            <Header />
            <Hero location={location} />
            <EventsList eventsData={data.allEventsJson} location={location} />
            <Footer />
        </div>
    )
}

export default IndexPage

export const Head = () => (
  <Seo />
)

export const query = graphql`
  query {
    allEventsJson {
      edges {
        node {
          title
          formatted_start_date
                  downloadedImages {
          childImageSharp {
            gatsbyImageData
          }
        }
          url
        }
      }
    }
  }
`