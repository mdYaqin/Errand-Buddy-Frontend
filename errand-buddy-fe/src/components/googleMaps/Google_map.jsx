import React from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'


const libraries = ["places"]
const mapContainerStyle = {
    width: '300px',
    height: '200px'
}

function Google_map({latitude, longtitude}) {
    
    const center = {
        lat: latitude,
        lng: longtitude
    }

    const {isLoaded, LoadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
        libraries,
    })

    if(LoadError) return "Error Loading Maps"

    if(!isLoaded) return "Loading Maps"
    
    return (
        <div>
            <GoogleMap 
                mapContainerStyle={mapContainerStyle} 
                zoom={15} 
                center={center}
            >
            
            <Marker position={{ lat: latitude, lng: longtitude }} />
            
            </GoogleMap>
       
        </div>
    );
}

export default Google_map;