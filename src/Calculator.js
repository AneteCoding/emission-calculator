import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Calculator() {

    let [loaded, setLoaded] = useState(false);
    let [co2, setCo2] = useState(null);
    let [from, setFrom] = useState(null);
    let [to, setTo] = useState(null);
    let [distance, setDistance] = useState(null);

    function search() {
        let apiKey = `WME5QPKXTV49SKK6C6BJV1EF2JGF`;
        let apiUrl = `https://beta2.api.climatiq.io/estimate`;
        const data = {
            "emission_factor": "passenger_flight-route_type_domestic-aircraft_type_jet-distance_na-class_na-contrails_included",
            "parameters":
            {
                "route": [from, to]
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

    // function distance() {
    //     fetch(`https://greatcirclemapper.p.rapidapi.com/airports/route/${from}-${to}/510`, {
    //         "method": "GET",
    //         "headers": {
    //             "content-type": "text/html;charset=UTF-8",
    //             "vary": "Accept-Encoding",
    //             "x-rapidapi-host": "greatcirclemapper.p.rapidapi.com",
    //             "x-rapidapi-key": "371b810738msh6b3976b89e4c200p1e1728jsn4e68ed677b97"
    //         }
    //     })

    //         .then(response => response.json())
    //         .then(data => {

    //             console.log(data);
    //     
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });

    // }


    function handleSubmit(event) {
        event.preventDefault();
        search();
        distance();
    }


    function handleFrom(event) {
        setFrom(event.target.value.toUpperCase());
    }
    function handleTo(event) {
        setTo(event.target.value.toUpperCase());
    }
    function handleDistance(response) {
        setDistance(response.data.totals.distance_km)
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Calculator">
                <section>
                    <form onSubmit={handleSubmit} className="search-form">
                        <input type="search" placeholder="FROM" className="form-control search-input" autoFocus="on" onChange={handleFrom} />
                        <input type="search" placeholder="TO" className="form-control search-input" autoFocus="on" onChange={handleTo} />
                    </form>
                </section>
                <div className="results">
                    <ul>
                        <li>Origin: <span id="origin"></span></li>
                        <li>Destination: <span id="destination"></span></li>
                        <li>Distance: <span id="distance">{distance}</span>km</li>
                        <li>Emissions: <span id="esmisions">{Math.round(co2)}</span> kg</li>
                    </ul>
                </div>
            </div>
        );
    } else {
        load();

    }

}