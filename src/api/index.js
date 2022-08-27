import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
params: {
  bl_latitude: '11.847676',
  tr_latitude: '12.838442',
  bl_longitude: '109.095887',
  tr_longitude: '109.149359',
},
headers: {
  'X-RapidAPI-Key': '116f4545e7msh49afd6a3ba191c8p1c7c8bjsnd56d9a242e6d',
  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
}
}   

  export const getPlacesData = async () => {
    try {
        const {data: { data } } = await axios.get(URL, options);       
        
        return data;
    } catch (error){
        console.log(error)
    }
  }
  