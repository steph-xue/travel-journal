import React from 'react'

function Card(prop) {
    return (
        <div>
            <img src={`/images/${prop.image}`} alt={prop.location} />
            <div className="location">
                <img src="/images/pin.png" alt="pin" />
                <p>{prop.location}</p>
                <a href={prop.googleMapsUrl}>View on Google Maps</a>
            </div>
            <div className="dates">
                <p>{prop.startDate} - {prop.endDate}</p>
            </div>
            <p>{prop.description}</p>
            <hr />
        </div>
    );
}

export default Card;