import React from "react";
import { MdLocationPin } from 'react-icons/md';
function Card(props)
{
    return(
        <div className="card">
            <img src={props.imageUrl} className="card--image"/>
            <div className="card--stats">
                <MdLocationPin className="card--location" />
                <span className="card--country">{props.location}</span>
                <a href={props.googleMapsUrl} className="card--map">View on Google Maps</a >
            <div >
                <h1 className="place--name">{props.title}</h1>
                <h5 className="card--date">{props.startDate} - {props.endDate}</h5>
                <p className="card--desc">{props.description}</p>
            </div>
            </div>

        </div>
    )
}
export default Card;