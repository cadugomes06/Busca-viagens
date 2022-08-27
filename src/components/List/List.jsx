import React, { useState } from 'react'
import PlaceDatail from '../PlaceDetails/PlaceDatail';

const List = () => {
  const [type, setType] = useState('restaurante');
  const [rating, setRating] = useState('');

  const places = [
    {name: 'Cool place'},
    {name: 'Nice beer'},
    {name: 'Best steak'},
    {name: 'Cool bobs'},
    {name: 'Mc donalds'},
    {name: 'best Place'},
    {name: 'Loja 01'},
    {name: 'Bar good'},
    {name: 'Car Store'}    
  ]

  return (
    <div className='w-full h-screen'>
      <div className='block w-full text-2xl font-semibold p-2 text-black mb-2'>
        <h4>Restaurantes, Hotéis e atrações ao seu redor.</h4>
      </div>
      <div className='flex p-2'>
        <form className='block mb-2'> 
          <label className='text-black mr-2'>Filtrar</label>
        <select value={type}
         onChange={({target}) => setType(target.value)}
         className="mr-2 outline-none rounded-md bg-gray-300"
         >
          <option>Restaurante</option>
          <option>Hotéis</option>
          <option>Atrações</option>
        </select>
        </form>

        <form> 
        <select  value={rating}
         onChange={({target}) => setRating(target.value)} placeholder="Avaliação"
         className="mr-2 outline-none rounded-md  bg-gray-300"
         >
          <option>Todos</option>
          <option>Mais de 3.0</option>
          <option>Mais de 4.0</option>
          <option>Mais de 4.5</option>
        </select>
        </form>
        </div>

        <div className='grid grid-cols-2'>
          {places?.map((place, i ) => (
            <div  key={i} className="col-span-2">
                <PlaceDatail place={place} />
               </div>
          ))}

        </div>
    </div>
  )
}

export default List