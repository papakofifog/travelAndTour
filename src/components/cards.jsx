import React from "react";
import { IoLocationSharp } from "react-icons/io5";

export default function Card (props){
    return (
        <div className="card">
            <img className="card--image" src={props.image} alt="" />
            <div className="card--body">
                <p className="card--Location"><span className="card--travelLocation--Icon"></span>{props.location} <a href={props.locationURL} className="googleLocation"><IoLocationSharp className="locationIcon"  /></a></p>
                <h4 className="card--travelSceneryName bold">{props.sceneryName}</h4>
                <p className="card--travelDuration bold">{props.startDate} - {props.endDate}</p>
                <p className="card-travelDescription">{props.description}</p>
            </div>

        </div>
    );
}