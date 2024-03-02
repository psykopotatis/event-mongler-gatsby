import * as React from "react"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

// Array of month names for mapping
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const aggregateEventsByMonth = (eventsData) => {
    if (!eventsData || !Array.isArray(eventsData.edges)) {
        return {}; // Return empty object if eventsData or edges is not in expected format
    }

    const eventsByMonth = {};

    eventsData.edges.forEach(({ node }) => {
        const date = new Date(node.js_timestamp);
        // Use month name from the array
        const monthYearKey = `${monthNames[date.getMonth()]} ${date.getFullYear()}`; // Format: MonthName-YYYY

        if (!eventsByMonth[monthYearKey]) {
            eventsByMonth[monthYearKey] = 1; // Initialize the month-year key with one event
        } else {
            eventsByMonth[monthYearKey]++; // Increment the count for the month-year key
        }
    });

    return eventsByMonth;
};

const EventsList = ({eventsData, location}) => {
    const numberOfEvents = eventsData?.edges?.length || 0;
    const eventsByMonth = aggregateEventsByMonth(eventsData);

    // Convert the eventsByMonth object into an array for easier rendering
    const eventsCountByMonth = Object.keys(eventsByMonth).map(key => ({
        monthYear: key,
        count: eventsByMonth[key]
    }));

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

                    <div>
                        By month<br/>
                        {/* Create clickable links for each month */}
                        {eventsCountByMonth.map(({ monthYear, count }) => (
                            <div key={monthYear}>
                                <a href={`#${monthYear.replace(/\s+/g, '-')}`}>{monthYear}: {count} events</a>
                            </div>
                        ))}
                    </div>

                    <div className="col-md-9">
                        <ul className="list-group list-group-flush">
                            {eventsData?.edges?.map(({node}, index) => {
                                const date = new Date(node.js_timestamp);
                                const monthYearKey = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
                                const anchorId = monthYearKey.replace(/\s+/g, '-');

                                return (
                                    <li className="list-group-item" key={index}>
                                        {/* Set anchor point for each month */}
                                        <div id={anchorId} key={index}>
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
                                );
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EventsList

