import * as React from "react"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import {graphql} from "gatsby"


const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = ({data}) => {
    return (
        <main style={pageStyles}>
            <div>
                <h1>Kommande evenemang</h1>
                {data.allEventsJson.edges.map(({node}, index) => (
                    <div key={index}>
                        <h2>{node.title}</h2>
                        <p>{node.formatted_start_date}</p>
                        <a href={node.url} target="_blank" rel="noreferrer">
                            {node.downloadedImages && (
                                <GatsbyImage image={getImage(node.downloadedImages)} alt={node.title}/>
                            )}
                        </a>
                    </div>
                ))}
            </div>
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