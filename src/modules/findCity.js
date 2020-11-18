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


const clientId = 'cff280b633eb4f439ae1a66233be8bf0';
const clientSecret = 'bce8dd6a0cc84cccaa31c1045bac6f85';

const loadGenres = async () => {
    //get the token

    const getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }

    const getTracks = async (token, tracksEndPoint) => {
        const limit = 10;

        const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.items;
    }
    const token = await getToken();

     const tracksEndPoint = 'https://api.spotify.com/v1/playlists/37i9dQZF1DWTyiBJ6yEqeu/tracks';
     // get the list of tracks
     const tracks = await getTracks(token, tracksEndPoint);

      tracks.forEach(el => console.log(el.track.name))
     return tracks
}

export { findCity, loadGenres }