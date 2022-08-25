import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
//import PlaceDetails from '../PlaceDetails/PlaceDatail'

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  
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
        zoom={10}
        options={''}
        onChange={(e) => {
          console.log(e)
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
        }}
        onChildClick={''}
      >
       <Marker position={coordinates} options={{
        label: 'Pontinho na tela'
      }} />
      </GoogleMap>
  ) : <></>}
      </div>
  )
}
export default Map