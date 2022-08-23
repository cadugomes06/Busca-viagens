import React from 'react'
//import { Autocomplete } from '@react-google-maps/api'
import { BiSearchAlt } from 'react-icons/bi'


const Header = () => {
  return (
    <>
    <div className='flex items-center justify-between px-16
     bg-cyan-800 w-full h-14'
     >
            <div>
                <h1 className='text-white font-mono font-semibold'>BusckFood</h1>
            </div>

            <div className='flex justify-center items-center'>              
              <p className=' mr-2 text-white font-sans	font-medium'>
                Explore novos lugares
                </p>

               <div className='flex justify-end items-center w-46 pl-2 opacity-50 bg-slate-100 h-8
                outline-none rounded '>
                 <BiSearchAlt />
               <input className='outline-none pb-1 pl-1 w-46 h-8 flex rounded'
                type='text' 
                placeholder='Explorar...'
                 />
                </div> 
                
            </div>             
    </div> 
            </>   
  )
}

export default Header