import './styles/reset.css';
import './styles/style.css';
import changeQuote from './modules/quotes';

import {
  loadSongs,
  createSongElements,
  resetList,
} from './modules/spotify';

import {
  findCity,
} from './modules/findCity';
import {
  convertCelsius,
  convertMonth,
  convertFtoC,
  convertCtoF,
} from './modules/convert';

const form = document.getElementById('form');

const cityInput = document.getElementById('city-input');
const country = document.getElementById('country');
const dayCont = document.getElementById('day');
const monthCont = document.getElementById('month');
const city = document.getElementById('city');
const description = document.getElementById('description');
const submit = document.getElementById('submit');
const temp = document.getElementById('temperature');
const feelsLike = document.getElementById('feels_like');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const tempMax = document.getElementById('temp_max');
const tempMin = document.getElementById('temp_min');
const grades = document.querySelectorAll('.grades');
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const checkbox = document.querySelector('input[type="checkbox"]');
const spinner = document.querySelector('.loader');
const weatherBox = document.querySelector('.weather-box');
const songBox = document.querySelector('.song-box');
const welcomeBox = document.querySelector('.welcome-box');
const quote = document.querySelector('.quote');
quote.textContent = changeQuote();

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    grades.forEach(el => {
      el.textContent = ' ºF';
    });

    temp.textContent = convertCtoF(temp.textContent);
    feelsLike.textContent = convertCtoF(feelsLike.textContent);
    tempMax.textContent = convertCtoF(tempMax.textContent);
    tempMin.textContent = convertCtoF(tempMin.textContent);
  } else {
    grades.forEach(el => {
      el.textContent = ' ºC';
    });

    temp.textContent = convertFtoC(temp.textContent);
    feelsLike.textContent = convertFtoC(feelsLike.textContent);
    tempMax.textContent = convertFtoC(tempMax.textContent);
    tempMin.textContent = convertFtoC(tempMin.textContent);
  }
});


submit.addEventListener('click', (e) => {
  e.preventDefault();

  if (checkbox.checked) { checkbox.click(); }
  spinner.classList.add('spin');
  findCity(cityInput.value)
    .then(response => {
      if (response) {
        city.textContent = response.name;
        country.textContent = response.sys.country;
        pressure.textContent = response.main.pressure;
        humidity.textContent = response.main.humidity;
        temp.textContent = convertCelsius(response.main.temp);
        feelsLike.textContent = convertCelsius(response.main.feels_like);
        tempMax.textContent = convertCelsius(response.main.temp_max);
        tempMin.textContent = convertCelsius(response.main.temp_min);
        dayCont.textContent = day;
        monthCont.textContent = convertMonth(month);
        description.textContent = response.weather[0].description;
      }
    });

  loadSongs(temp)
    .then(data => {
      resetList();
      data.forEach(el => {
        createSongElements(el);
      });
      quote.textContent = changeQuote();

      spinner.classList.remove('spin');
      if (city.textContent !== 'X') {
        welcomeBox.style.display = 'none';
        weatherBox.style.display = 'block';
        songBox.style.display = 'block';
      }
      form.reset();
    });
});