import * as React from "react"
import EventsList from './events.js'
import {graphql} from "gatsby";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Header from "../components/header";
// Import from an installed package
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";


const IndexPage = ({data}) => {
    return (
        <div>
            <Header />
            <Hero />
            <EventsList eventsData={data.allEventsJson} />
            <Footer />
        </div>
    )
}

export default IndexPage

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