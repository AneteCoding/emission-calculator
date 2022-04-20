import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import airports from './airportList';

export default function AirportInput(props) {
    const handleOnSearch = (string, results) => {
        console.log(string, results);
    }

    return (
        <div>
            <ReactSearchAutocomplete
                placeholder={props.placeholder}
                showIcon={false}
                items={airports}
                // autoFocus
                onSearch={handleOnSearch}
                onSelect={props.onSelect}
            />
        </div>
    )

}
