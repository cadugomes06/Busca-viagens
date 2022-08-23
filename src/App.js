import React from 'react';
import './App.css'

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


const App = () => {
  return (
    <div>
        <Header />

        <div className='grid grid-cols-3 w-full'>
            <div>
                <List />
            </div>
            <div className='grid-colums col-span-2	'>
                <Map />
            </div>
        </div>
        
    </div>
  )
}

export default App