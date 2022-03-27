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
        props.handleIataFrom(item.iata)
    }
    const handleOnSelectTo = (item) => {

        console.log(item.name)
        props.handleTo(item.name)
        props.handleIataTo(item.iata)
    }



    return (
        <div className='mt-5'>

            <div>
                <ReactSearchAutocomplete
                    placeholder={props.placeholder}
                    showIcon={false}
                    items={items}
                    autoFocus
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelectFrom}

                />
            </div>


        </div>

    )


}
