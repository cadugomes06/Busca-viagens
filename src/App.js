import React, { useEffect, useState } from 'react';
import './App.css'
import { getPlacesData } from './api'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


const App = () => {
  const [places, setPlaces] = useState([])

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    console.log(coordinates, bounds)

    getPlacesData()
    .then((data) => {
      setPlaces(data);
    })
  }, [coordinates, bounds])

  return (
    <div>
        <Header />

        <div className='grid grid-cols-3 w-full'>
            <div>
                <List />
            </div>
            <div className='grid-colums col-span-2'>
                <Map 
                  setCoordinates={setCoordinates}
                  setBounds={setBounds}
                  coordinates={coordinates}
                   />
            </div>
        </div>
        
    </div>
  )
}

export default App