const quotes = {
  cold: [
    "\'Cause it's too cold for you here and now\' - The Neighbourhood",
    "\'And if you feel you're sinking, I will (maybe) jump right over into cold, cold water for you\' - Justin Bieber",
    "\'Well it's cold, cold, cold, cold inside, darker in the day than the dead of night\' - Cage The Elephant",
    "\'You're feeling that ice cold, forgetting the good things\' - Half alive",
    '\'On a day like this, the heat, it feel like summer\' -           Childish Gambino'
  ]
};


const changeQuote = (temp) => {
    return quotes.cold[Math.floor(Math.random() * quotes.cold.length)];

}

export default changeQuote;


// const quotes = {
//     cold: [
//       "Cause it's too cold for you here and now",
//       "Where is the 'DELETE COLD' button when you need it"
//     ],
  
//     normal: [
//       "Temprature outside is okay, you can cry about weather tomorrow"
//     ],
  
//     hot: [
//       "It's blooooooooody hot outside.",
//       "The heat index is somewhere in between OMG and WTF"
//     ]
//   };
  

// const changeQuote = (temp) => {
//     if (temp > 20) {
//       return quotes.hot[Math.floor(Math.random() * quotes.hot.length)];
//     } else if (temp <= 20 && temp > 10) {
//       return quotes.normal[Math.floor(Math.random() * quotes.normal.length)];
//     } else {
//       return quotes.cold[Math.floor(Math.random() * quotes.cold.length)];
//     }
//   }


