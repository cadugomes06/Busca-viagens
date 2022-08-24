import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import PlaceDetails from '../PlaceDetails/PlaceDatail'

const Map = () => {
  const coordinates = { lat: -22.346044136649493, lng: -41.799172695733546};
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
        onChange={''}
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