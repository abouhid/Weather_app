const convertCelsius = (kelvin) => Math.round(kelvin - 273.15);

const convertFarenheit = (kelvin) => Math.round(((kelvin - 273.15) * 9) / 5 + 32);

const convertMonth = (month) => {
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName=months[month];
return monthName
}

export { convertCelsius, convertFarenheit, convertMonth }