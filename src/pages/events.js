import * as React from "react"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'


const EventsList = ({eventsData}) => {
    return (
        <div>
            <div className="container">
                <div className="row text-center">
                    <div className="col">
                        <h2>.. kommande evenemang i Stockholm</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                        asdf
                    </div>

                    <div className="col-md-9">
                        <ul className="list-group list-group-flush">
                            {eventsData?.edges?.map(({node}, index) => (
                                <li className="list-group-item">
                                <div key={index}>
                                    <div>{node.formatted_start_date}</div>
                                    <div className="event-url">
                                        <b><a href="{node.url}" target="_blank">{node.title}</a></b>
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
        </div>
    )
}

export default EventsList

