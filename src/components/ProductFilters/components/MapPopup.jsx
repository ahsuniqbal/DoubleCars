import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Modal, ModalBody } from 'reactstrap';
import { GoogleApiKey } from '../../../config/ConnectionString';


const libraries = ["places"];
const mapContainerStyle = {
    width: "100%",
    height: "400px"
};
const center = {
    lat: 36.778259,
    lng: -119.417931,
}
const options = {
    disableDefaultUI: true,
    zoomControl: true,
}


const MapPopup = (props) => {
    const [marker, setMarker] = useState(null);
    const [selected, setSelected] = useState(null);

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: GoogleApiKey,
        libraries: libraries,
    });

    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading maps";


    const GetMarkerLocation = (e) => {
        setMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        });
        setSelected({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        })
    }
    

    return(
        <Modal {...props} size="lg">
            <ModalBody>
                <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={6} 
                center={center}
                options={options}
                onClick={(e) => GetMarkerLocation(e)}>
                    {
                        marker ? <Marker position={{ lat: marker.lat, lng: marker.lng }} onClick={() => setSelected({lat: marker.lat, lng: marker.lng})} /> : <Marker position={center} />
                    }
                    {
                        selected ? <InfoWindow position={{ lat: selected.lat, lng: selected.lng }} onCloseClick={() => setSelected(null)} >
                            <div>
                                <h5>Selected Location:</h5>
                                <p>{"Lat: " + selected.lat + ", Lng: " + selected.lng}</p>
                            </div>
                        </InfoWindow>
                        : null
                    }
                </GoogleMap>
            </ModalBody>
        </Modal>
    );
}

export default MapPopup;