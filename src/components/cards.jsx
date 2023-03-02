import React from "react";

export default function Card (props){
    return (
        <div className="card">
            <img className="card--image" src={props.image} alt="" />
            <div className="card--body">
                <p className="card--Location"><span className="card--travelLocation--Icon">locationIcon</span>{props.location} <a href={props.locationURL} className="googleLocation">View on Google Maps</a></p>
                <h4 className="card--travelSceneryName bold">{props.sceneryName}</h4>
                <p className="card--travelDuration bold">{props.startDate} - {props.endDate}</p>
                <p className="card-travelDescription">{props.description}</p>
            </div>

        </div>
    );
}