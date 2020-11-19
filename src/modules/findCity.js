import { openModal } from './modal';

const API_KEY = '5293324763a8d47157a1f33e0d7b8d86';


const findCity = async (city) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: 'cors' });
    const weatherData = await response.json();
    if (weatherData.cod === 200) {
      return weatherData;
    }
    throw new Error();
  } catch (error) {
    // openModal('City not found!');
    return openModal('City not found!');
  }
};

export { findCity, API_KEY };