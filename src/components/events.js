import * as React from "react"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'


const EventsList = ({eventsData, location}) => {
        // Get the number of events
    const numberOfEvents = eventsData?.edges?.length || 0;

    return (
        <div>
            <div className="container">
                <div className="row text-center">
                    <div className="col">
                        <h2>{numberOfEvents} kommande evenemang i {location}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        &nbsp;
                    </div>

                    <div className="col-md-9">
                        <ul className="list-group list-group-flush">
                            {eventsData?.edges?.map(({node}, index) => (
                                <li className="list-group-item" key={index}>
                                    <div key={index}>
                                        <div>{node.formatted_start_date}</div>
                                        <div className="event-url">
                                            <b><a href={node.url} target="_blank" rel="noreferrer">{node.title}</a></b>
                                        </div>
                                        <a href={node.url} target="_blank" rel="noreferrer">
                                            {node.downloadedImages && (
                                                <GatsbyImage image={getImage(node.downloadedImages)} alt={node.title}/>
                                            )}
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EventsList

