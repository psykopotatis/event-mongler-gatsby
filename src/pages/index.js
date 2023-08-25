import * as React from "react"
import EventsList from './events.js'
import {graphql} from "gatsby";

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = ({data}) => {
    console.log(data.allEventsJson)
    return (
        <main style={pageStyles}>
            <EventsList eventsData={data.allEventsJson} />
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