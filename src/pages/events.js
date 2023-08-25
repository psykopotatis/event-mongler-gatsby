import * as React from "react"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'


const EventsList = ({eventsData}) => {
    return (
        <div>
            <h1>Kommande evenemang</h1>
            {eventsData?.edges?.map(({node}, index) => (
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
    )
}

export default EventsList

