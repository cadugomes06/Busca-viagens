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
    <div className='w-full h-screen bg-orange-500'>
      <div>
        <h4>Restaurantes, Hotéis e atrações ao seu redor.</h4>
      </div>
        <form> 
          <label>Tipos</label>
        <select value={type} onChange={({target}) => setType(target.value)}>
          <option>Restaurante</option>
          <option>Hotéis</option>
          <option>Atrações</option>
        </select>
        </form>

        <form> 
          <label>Avaliação</label>
        <select  value={rating} onChange={({target}) => setType(target.value)}>
          <option>Todos</option>
          <option>Mais de 3.0</option>
          <option>Mais de 4.0</option>
          <option>Mais de 4.5</option>
        </select>
        </form>

        <div className='grid grid-cols-2'>
          {places?.map((place, i ) => (
            <div item key={i} className="col-span-2">
                <PlaceDatail place={place} />
               </div>
          ))}

        </div>
    </div>
  )
}

export default List