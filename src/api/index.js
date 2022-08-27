import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

  export const getPlacesData = async (sw, ne) => {
    try {
        const {data: { data } } = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '116f4545e7msh49afd6a3ba191c8p1c7c8bjsnd56d9a242e6d',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });          
        
        return data;
    } catch (error){
        console.log(error)
    }
  }
  