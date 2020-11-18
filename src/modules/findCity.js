import { openModal} from './modal'


const findCity = async (city) => {
const API_KEY = "5293324763a8d47157a1f33e0d7b8d86"

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: 'cors' });
    const weatherData = await response.json();
  
    if(weatherData.cod === '404' ) {
      throw new Error('Yeah... Sorry');
    } else {
      console.log('Data.cod')
      return weatherData
    }
  } catch(error) {
      openModal('City not found!')
  }
}

export { findCity }