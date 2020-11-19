const quotes = {
  cold: [
    "'Cause it's too cold for you here and now' - The Neighbourhood",
    "'And if you feel you're sinking, I will (maybe) jump right over into cold, cold water for you' - Justin Bieber",
    "'Well it's cold, cold, cold, cold inside, darker in the day than the dead of night' - Cage The Elephant",
    "'You're feeling that ice cold, forgetting the good things' - Half alive",
    "On a day like this, the heat, it feel like summer' - Childish Gambino",
  ],
};


const changeQuote = () => quotes.cold[Math.floor(Math.random() * quotes.cold.length)];

export default changeQuote;
