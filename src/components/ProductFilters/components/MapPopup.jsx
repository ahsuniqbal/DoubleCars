import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import { GoogleApiKey } from '../../../config/ConnectionString';
import SearchPlaces from './SearchPlaces';
import '../styles/MapPopup.css';

const libraries = ["places"];
const mapContainerStyle = {
    width: "100%",
    height: "400px"
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};

const MapPopup = (props) => {
    const [marker, setMarker] = useState(null);
    const [selected, setSelected] = useState(null);
    
    
    

    const onMapClick = useCallback((e) => {
        setMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        });
        setSelected({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        })
    }, []);

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({ lat, lng }) => {
        setMarker({
            lat: lat,
            lng: lng,
        });
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    const { loadError } = useLoadScript({
        googleMapsApiKey: GoogleApiKey,
        libraries: libraries,
    });

    if(loadError){
        alert("Error loading map");
    }
    

    return(
        <Modal {...props} size="lg" centered>
            <ModalHeader charCode="X" {...props}>
                <SearchPlaces center={props.center} panTo={panTo} />
            </ModalHeader>
            <ModalBody>
                <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={6} 
                center={props.center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
                >
                    {
                        marker ? <Marker position={{ lat: marker.lat, lng: marker.lng }} onClick={() => setSelected({lat: marker.lat, lng: marker.lng})} /> : <Marker position={props.center} />
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

            <ModalFooter>
                <Button color="primary" onClick={() => { props.GetLocationFromMap(marker); props.toggle() }} >Save Location</Button>
            </ModalFooter>
        </Modal>
    );
}

export default MapPopup;