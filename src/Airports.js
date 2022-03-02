import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export default function Airports() {

    const items = [
        {
            EVRA: {
                icao: "EVRA",
                iata: "RIX",
                name: "Riga International Airport",
                city: "Riga",
                state: "Marupe",
                country: "LV",
                elevation: 36,
                lat: 56.9235992432,
                lon: 23.9710998535,
                tz: "Europe\/Riga"
            },
            ENGM: {
                icao: "ENGM",
                iata: "OSL",
                name: "Oslo Gardermoen Airport",
                city: "Oslo",
                state: "Akershus",
                country: "NO",
                elevation: 681,
                lat: 60.193901062,
                lon: 11.100399971,
                tz: "Europe\/Oslo"
            },
            EGKK: {
                "icao": "EGKK",
                "iata": "LGW",
                "name": "London Gatwick Airport",
                "city": "London",
                "state": "England",
                "country": "GB",
                "elevation": 202,
                "lat": 51.1481018066,
                "lon": -0.1902779937,
                "tz": "Europe\/London"
            },
            LLBG: {
                "icao": "LLBG",
                "iata": "TLV",
                "name": "Ben Gurion International Airport",
                "city": "Tel Aviv",
                "state": "Central-District",
                "country": "IL",
                "elevation": 135,
                "lat": 32.0113983154,
                "lon": 34.8866996765,
                "tz": "Asia\/Jerusalem"
            },
            KJFK: {
                "icao": "KJFK",
                "iata": "JFK",
                "name": "John F Kennedy International Airport",
                "city": "New York",
                "state": "New-York",
                "country": "US",
                "elevation": 13,
                "lat": 40.63980103,
                "lon": -73.77890015,
                "tz": "America\/New_York"
            }
        }
    ]
    const handleOnSearch = (string, results) => {

        console.log(string, results)
    }
    const formatResult = (item) => {
        console.log(item);
        return (
            <div >
                <span> iata: {item.iata}</span>
                <span> name: {item.name}</span>
            </div>
        );
    };


    return (
        <div className='mb-5'>
            <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                formatResult={formatResult}
                autoFocus
            />
        </div>
    )


}
