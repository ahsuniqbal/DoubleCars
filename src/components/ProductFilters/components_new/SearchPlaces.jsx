import React from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import "@reach/combobox/styles.css";

const SearchPlaces = (props) => {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => props.center.lat, lng: () => props.center.lng },
            radius: 200 * 1000,
        },
    });
    return(
        <Combobox
            onSelect={async (address) => { 
                setValue(address, false);
                clearSuggestions();

                try {
                    const results = await getGeocode({ address });
                    const { lat, lng } = await getLatLng(results[0]);
                    props.panTo({ lat, lng });
                }
                catch(error) {
                    console.log("Error!", error);
                }
            }}
        >
            <ComboboxInput 
                value={value} 
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                disabled={!ready}
                placeholder="Search Google Maps"
                className="form-control"
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && 
                        data.map(({ id, description }) => ( 
                            <ComboboxOption key={id} value={description} /> 
                        ))
                    }
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
}

export default SearchPlaces;