import * as React from "react"
import EventsList from './events.js'
import {graphql} from "gatsby";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Header from "../components/header";

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = ({data}) => {
    return (
        <main style={pageStyles}>
            <Header />
            <Hero />
            <EventsList eventsData={data.allEventsJson} />
            <Footer />
        </main>
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