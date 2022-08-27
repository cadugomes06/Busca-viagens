import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
//import PlaceDetails from '../PlaceDetails/PlaceDatail'

const Map = ({ setCoordinates, setBounds, coordinates}) => {

  //const coordinates = {lat: -22.379679077866935, lng: -41.810342324505775}
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCPJVWBJ0d6UomtTUGao178ch1nc2VAA9M"
  })

  return (
      <div className='w-full h-screen'>
      {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: '100%', height: '100%'}}
        center={coordinates}
        zoom={14}
        options={''}
        onCenterChanged={(e) => {
          console.log(e.center.lat)
          setCoordinates({lat: e.center.lat, lng: e.center.lng})
        }}
        
        onChildClick={''}
      >
       
      </GoogleMap>
  ) : <></>}
      </div>
  )
}
export default Map