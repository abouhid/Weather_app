const convertCelsius = (kelvin) => Math.round(kelvin - 273.15);
const convertFarenheit = (kelvin) => Math.round(((kelvin - 273.15) * (9 / 5)) + 32);
const convertCtoF = (celsius) => Math.round((celsius * 9) / 5 + 32);
const convertFtoC = (farenheit) => Math.round((farenheit - 32) * (5 / 9));


const convertMonth = (month) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthName = months[month];
  return monthName;
};

export {
  convertCelsius, convertFarenheit, convertMonth, convertFtoC, convertCtoF,
};