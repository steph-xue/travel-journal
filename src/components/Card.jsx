import React from 'react'

function Card(prop) {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-left">
                    <img className="card-image" src={`/images/${prop.image}`} alt={prop.location} />
                </div>
                <div className="card-right">
                    <div className="card-location">
                        <img className="pin" src="/images/pin.png" alt="pin" />
                        <p className="location">{prop.location}</p>
                        <a className="location-link" href={prop.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="card-title">{prop.title}</h1>
                    <div className="card-dates">
                        <p>{prop.startDate} </p>
                        {prop.endDate && <p>-</p>}
                        {prop.endDate && <p> {prop.endDate}</p>}
                    </div>
                    <p className="card-description">{prop.description}</p>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Card;