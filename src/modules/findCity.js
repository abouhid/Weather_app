
const findCity = async (city) => {
const API_KEY = "5293324763a8d47157a1f33e0d7b8d86"

  try {
    let response;
    response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`, { mode: 'cors' });
    const weatherData = await response.json();
    return weatherData
  } catch(error) {
    return { error: error.message };
  }
}

export { findCity }