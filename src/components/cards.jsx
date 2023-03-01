import React from "react";

export default function Card (){
    return (
        <div className="card">
            <img className="card--image" src="https://source.unsplash.com/WLxQvbMyfas

" alt="" />
            <div className="card--body">
                <p className="card--Location"><span className="card--travelLocation--Icon">locationIcon</span>JAPAN <a href="" className="">View on Google Maps</a></p>
                <h4 className="card--travelSceneryName bold">Mount Fuji</h4>
                <p className="card--travelDuration bold">12 Jan,2021 - 24Jan,2021</p>
                <p className="card-travelDescription">
                Mount Fuji is perhaps Japan’s biggest attraction, being the country’s highest peak at an impressive 3,776 metres. 
                The official climbing season for Mount Fuji is from early July until early-September when the trails are free of snow 
                and the weather is mild, so it is the perfect time to visit if you are eager to take on a rewarding and memorable challenge this summer.
                </p>
            </div>

        </div>
    );
}