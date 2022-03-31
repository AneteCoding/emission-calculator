import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { search } from "./lib/greatCircleMapper";
import Airports from './Airports';
import AirportInput from './AirportInput';


export default function Calculator() {


    let [from, setFrom] = useState(null);
    let [iataFrom, setIataFrom] = useState(null);
    let [icaoFrom, setIcaoFrom] = useState(null);
    let [to, setTo] = useState(null);
    let [iataTo, setIataTo] = useState(null);
    let [icaoTo, setIcaoTo] = useState(null);
    let [distance, setDistance] = useState(null);
    let [co2, setCo2] = useState(null);



    function calculateDistance() {
        fetch(`https://greatcirclemapper.p.rapidapi.com/airports/route/${icaoFrom}-${icaoTo}/510`, {
            "method": "GET",
            "headers": {
                "content-type": "text/html;charset=UTF-8",
                "vary": "Accept-Encoding",
                "x-rapidapi-host": "greatcirclemapper.p.rapidapi.com",
                "x-rapidapi-key": "371b810738msh6b3976b89e4c200p1e1728jsn4e68ed677b97"
            }
        })

            .then(response => response.json())
            .then(data =>

                setDistance(data.totals.distance_km)

            )
            .catch(err => {
                console.error(err);
            });

    }

    function calculateCo2() {
        let apiKey = `WME5QPKXTV49SKK6C6BJV1EF2JGF`;
        let apiUrl = `https://beta2.api.climatiq.io/estimate`;
        const data = {
            "emission_factor": "passenger_flight-route_type_domestic-aircraft_type_jet-distance_na-class_na-contrails_included",
            "parameters":
            {
                "route": [iataFrom, iataTo]
            }
        }
        const config = {
            headers: { Authorization: `Bearer ${apiKey}` }
        };


        axios.post(apiUrl, data, config)

            .then(data =>

                setCo2(data.data.co2e)
            );
    }



    return (
        <div className="Calculator">
            {/* <Airports handleFrom={handleFrom} handleTo={handleTo} handleIataFrom={handleIataFrom} handleIataTo={handleIataTo} handleSubmit={handleSubmit} /> */}
            <AirportInput placeholder="FROM" handleFrom={setFrom} handleIataFrom={setIataFrom} handleIcaoFrom={setIcaoFrom} />
            <AirportInput placeholder="TO" handleTo={setTo} handleIataTo={setIataTo} handleIcaoTo={setIcaoTo} />
            <button onClick={calculateCo2} className="btn btn-success mt-3"> Search </button>

            <div >
                <ul className="results">
                    <li>Origin: <span id="origin">{from}</span></li>
                    <li>Destination: <span id="destination">{to}</span></li>
                    <li>Distance: <span id="distance">{Math.round(distance)}</span> km</li>
                    <li>Emissions: <span id="esmisions">{Math.round(co2)}</span> kg</li>
                </ul>
            </div>
        </div>
    );
} 
