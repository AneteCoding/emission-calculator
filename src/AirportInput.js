import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import airports from './airportList';

export default function AirportInput(props) {


    const handleOnSearch = (string, results) => {

        console.log(string, results)
    }
    const handleOnSelect = (item) => {

        console.log(item.name)
        props.handleName(item.name)
        props.handleIata(item.iata)
        props.handleIcao(item.icao)
    }

    return (
        <div className='mt-5'>

            <div>
                <ReactSearchAutocomplete
                    placeholder={props.placeholder}
                    showIcon={false}
                    items={airports}
                    // autoFocus
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                />
            </div>

        </div>

    )


}
