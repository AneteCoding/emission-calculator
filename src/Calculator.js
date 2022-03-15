import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { search } from "./lib/greatCircleMapper";
import Airports from './Airports';


export default function Calculator() {


    let [origin, setOrigin] = useState(null);
    let [destination, setDestination] = useState(null);
    let [from, setFrom] = useState(null);
    let [iataFrom, setIataFrom] = useState(null);
    let [icaoFrom, setIcaoFrom] = useState(null);
    let [to, setTo] = useState(null);
    let [iataTo, setIataTo] = useState(null);
    let [icaoTo, setIcaoTo] = useState(null);
    let [distance, setDistance] = useState(null);
    let [co2, setCo2] = useState(null);

    function handleFrom(airport) {
        setFrom(airport);
    }

    function handleTo(airport) {
        setTo(airport);
    }
    function handleIata(airport) {
        setIataFrom(airport);
        setIataTo(airport);
    }

    function handleSubmit(event) {
        // event.preventDefault();

        // search(from).then(fromData => {
        //     console.log(fromData);
        //     search(to).then(toData => {
        //         calculateCo2(toData)
        //     });
        // })
        calculateCo2();
        // calculateDistance();
    }


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
            {/* <section>
                <form onSubmit={handleSubmit} className="search-form">
                    <input type="search" placeholder="FROM" className="form-control search-input" autoFocus="on" onChange={handleFrom} />
                    <input type="search" placeholder="TO" className="form-control search-input" autoFocus="on" onChange={handleTo} />
                    <button type="submit">Search</button>
                </form>
            </section> */}
            <Airports handleFrom={handleFrom} handleTo={handleTo} />

            <div className="results">
                <ul>
                    <li>Origin: <span id="origin">{from}</span></li>
                    <li>Destination: <span id="destination">{to}</span></li>
                    <li>Distance: <span id="distance">{Math.round(distance)}</span> km</li>
                    <li>Emissions: <span id="esmisions">{Math.round(co2)}</span> kg</li>
                </ul>
            </div>
        </div>
    );
} 
