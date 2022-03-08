import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

export default function Airports() {

    const items = [
        {
            iata: "RIX",
            icao: "EVRA",
            name: "Riga"

        },
        {
            iata: "OSL",
            icao: "ENGM",
            name: "Oslo"
        },
        {
            iata: "LGW",
            icao: "EGKK",
            name: "London"
        },
        {
            iata: "CDG",
            icao: "LFPG",
            name: "Paris"
        },
        {
            iata: "TLV",
            icao: "LLBG",
            name: "Tel Aviv"
        },
        {
            iata: "BCN",
            icao: "LEBL",
            name: "Barcelona"
        },
        {
            iata: "ARN",
            icao: "ESSA",
            name: "Stockholm"
        },
        {
            iata: "FCO",
            icao: "LIRF",
            name: "Rome"
        },
        {
            iata: "AMS",
            icao: "EHAM",
            name: "Amsterdam"
        },
        {
            iata: "BRU",
            icao: "EBBR",
            name: "Brussels"
        }

    ]


    const handleOnSearch = (string, results) => {

        console.log(string, results)

    }

    // const formatResult = (item) => {
    //     console.log(item);
    //     return (
    //         <div >
    //             <h3>iata: {item.iata}</h3>
    //             <h3>name: {item.name}</h3>
    //         </div>
    //     );
    // };


    return (
        <div className='mb-5'>
            <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}

                autoFocus
            />
        </div>
    )


}
