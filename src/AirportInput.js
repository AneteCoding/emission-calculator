import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import airports from './airportList';

export default function AirportInput(props) {

    const items = airports;

    const handleOnSearch = (string, results) => {

        console.log(string, results)
    }
    const handleOnSelect = (item) => {

        console.log(item.name)
        props.handleFrom(item.name)
        props.handleIataFrom(item.iata)
        props.handleTo(item.name)
        props.handleIataTo(item.iata)
        props.handleIcaoFrom(item.icao)
        props.handleIcaoTo(item.icao)
    }

    return (
        <div className='mt-5'>

            <div>
                <ReactSearchAutocomplete
                    placeholder={props.placeholder}
                    showIcon={false}
                    items={items}
                    // autoFocus
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                />
            </div>

        </div>

    )


}
