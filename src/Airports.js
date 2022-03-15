import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import airports from './airportList';

export default function Airports(props) {

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
    const handleOnSelectFrom = (item) => {

        console.log(item.name)
        props.handleFrom(item.name)
        props.handleIata(item.iata)
    }
    const handleOnSelectTo = (item) => {

        console.log(item.name)
        props.handleTo(item.name)
        props.handleIata(item.iata)
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
        <div className='mt-5'>
            <div>
                <ReactSearchAutocomplete
                    placeholder='FROM'
                    showIcon={false}
                    items={items}
                    onSearch={handleOnSearch}
                    autoFocus
                    onSelect={handleOnSelectFrom}

                />
            </div>
            <div className='mt-3'>
                <ReactSearchAutocomplete
                    placeholder='TO'
                    showIcon={false}
                    items={items}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelectTo}


                />
            </div>
            <button type="submit" className='mt-3'>Search</button>
        </div>

    )


}
