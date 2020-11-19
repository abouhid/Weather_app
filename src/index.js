import './styles/reset.css';
import './styles/style.css';
import logo from './images/logo1.png';

import changeQuote from './modules/quotes';

import {
    loadSongs,
    createSongElements,
    resetList
} from './modules/spotify.js'

import {
    findCity
} from './modules/findCity.js'
import {
    convertCelsius,
    convertFarenheit,
    convertMonth,
    convertFtoC,
    convertCtoF
} from './modules/convert.js'
import { openModal } from './modules/modal';

const form = document.getElementById('form');
const cityInput = document.getElementById('city-input');
const country = document.getElementById('country');
const dayCont = document.getElementById('day');
const monthCont = document.getElementById('month');
const city = document.getElementById('city')
const description = document.getElementById('description');
const submit = document.getElementById('submit');
const temp = document.getElementById('temperature');
const feels_like = document.getElementById('feels_like')
const humidity = document.getElementById('humidity')
const pressure = document.getElementById('pressure')
const temp_max = document.getElementById('temp_max')
const temp_min = document.getElementById('temp_min')
const grades = document.querySelectorAll('.grades')
const date = new Date()
const day = date.getDate();
const month = date.getMonth();
const checkbox = document.querySelector('input[type="checkbox"]');
const spinner = document.querySelector('.loader');
const weatherBox =  document.querySelector('.weather-box');
const songBox =  document.querySelector('.song-box');
const welcomeBox =  document.querySelector('.welcome-box');
const quote =  document.querySelector('.quote');


// const logoImg = new Image();
// logoImg.src = logo;

// const addIcon = () => {
//     const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
//     link.rel = 'shortcuts icon';
//     console.log('ss')
//     link.href = logo;
//     document.getElementsByTagName('head')[0].appendChild(link);
//   };

// addIcon();
quote.textContent = changeQuote()


checkbox.addEventListener('change', function () {

    if (checkbox.checked) {
        grades.forEach(el => {
            el.textContent = ' ºF'
        })

        temp.textContent = convertCtoF(temp.textContent);
        feels_like.textContent = convertCtoF(feels_like.textContent);
        temp_max.textContent = convertCtoF(temp_max.textContent);
        temp_min.textContent = convertCtoF(temp_min.textContent);
    } else {
        grades.forEach(el => {
            el.textContent = ' ºC'
        })

        temp.textContent = convertFtoC(temp.textContent);
        feels_like.textContent = convertFtoC(feels_like.textContent);
        temp_max.textContent = convertFtoC(temp_max.textContent);
        temp_min.textContent = convertFtoC(temp_min.textContent);
    }
});




submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (checkbox.checked) {checkbox.click()}
    spinner.classList.add('spin');  
    findCity(cityInput.value)
    .catch(err => {
        console.log(err); 
    })
        .then(response => {
            if(response){
            city.textContent = response.name
            country.textContent = response.sys.country;
            pressure.textContent = response.main.pressure;
            humidity.textContent = response.main.humidity;
            temp.textContent = convertCelsius(response.main.temp);
            feels_like.textContent = convertCelsius(response.main.feels_like);
            temp_max.textContent = convertCelsius(response.main.temp_max);
            temp_min.textContent = convertCelsius(response.main.temp_min);
            dayCont.textContent = day;
            monthCont.textContent = convertMonth(month);
            description.textContent = response.weather[0].description
        }
        })

    loadSongs(temp)
        .then(data => {
            resetList();
            data.forEach(el => {
                createSongElements(el)
            })

            spinner.classList.remove('spin')
            if(city.textContent !=='X'){ 
            welcomeBox.style.display = "none";
            weatherBox.style.display = "block";
            songBox.style.display = "block";
        }
        });
})

// clear sky
// few clouds
// scattered clouds
// broken clouds
// shower rain
// rain
// thunderstorm
// snow
// mist