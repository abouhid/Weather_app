
import './styles/reset.css';
import './styles/style.css';

import { findCity, loadGenres } from './modules/findCity.js'
import { convertCelsius, convertFarenheit, convertMonth } from './modules/convert.js'

const form = document.getElementById('form');
const cityInput = document.getElementById('city-input');
const country = document.getElementById('country');
const dayCont = document.getElementById('day');
const monthCont = document.getElementById('month');
const city = document.getElementById('city')
const description = document.getElementById('description');
const temp = document.getElementById('temperature');
const submit = document.getElementById('submit');
const feels_like = document.getElementById('feels_like')
const humidity = document.getElementById('humidity')
const pressure = document.getElementById('pressure')
const temp_max = document.getElementById('temp_max')
const temp_min = document.getElementById('temp_min')
const date = new Date()
const day = date.getDate();
const month = date.getMonth();
const song = document.getElementById('song')


 submit.addEventListener('click' ,(e) => {
    e.preventDefault();

    findCity(cityInput.value)
    .then(response => {
        city.textContent = response.name
        temp.textContent = convertCelsius(response.main.temp);
        country.textContent = response.sys.country;
        feels_like.textContent = convertCelsius(response.main.feels_like);
        pressure.textContent = convertCelsius(response.main.pressure);
        humidity.textContent = convertCelsius(response.main.humidity);
        temp_max.textContent = convertCelsius(response.main.temp_max);
        temp_min.textContent = convertCelsius(response.main.temp_min);
        dayCont.textContent = day;
        monthCont.textContent = convertMonth(month);
        description.textContent =response.weather[0].description
        console.log('response')
    })
   
    loadGenres()
    .then(data => {
        song.textContent =data[0].track.name
    });

    
})

