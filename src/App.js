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
    getPlacesData()
    .then((data) => {
      console.log(data)
      setPlaces(data);
    })
  }, [])

  return (
    <div>
        <Header />

        <div className='grid grid-cols-3 w-full'>
            <div>
                <List places={places} />
            </div>
            <div className='grid-colums col-span-2'>
                <Map 
                  etCoordinates={setCoordinates}
                  setBounds={setBounds}
                  coordinates={coordinates}
                   />
            </div>
        </div>
        
    </div>
  )
}

export default App