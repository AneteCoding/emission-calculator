import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Calculator() {

    let [loaded, setLoaded] = useState(false);
    let [results, setResults] = useState(null);
    let [from, setFrom] = useState(null);
    let [to, setTo] = useState(null);

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

            .then(data => {
                console.log(data)
                handleSearch()
            })

    }


    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleSearch(response) {
        setResults(response.data.co2e);
    }
    function handleFrom(event) {
        setFrom(event.target.value);
    }
    function handleTo(event) {
        setTo(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Calculator">
                <section>
                    <form onSubmit={handleSubmit}>
                        <input type="search" placeholder="FROM" className="form-control search-input" autoFocus="on" onChange={handleTo} />
                        <input type="search" placeholder="TO" className="form-control search-input" autoFocus="on" onChange={handleFrom} />
                    </form>
                </section>
                <div className="results">
                    <ul>
                        <li>Origin: <span id="origin"></span></li>
                        <li>Destination: <span id="destination"></span></li>
                        <li>Distance: <span id="distance"></span>km</li>
                        <li>Emissions: <span id="esmisions">{results}</span> kg</li>
                    </ul>
                </div>
            </div>
        );
    } else {
        load();

    }

}