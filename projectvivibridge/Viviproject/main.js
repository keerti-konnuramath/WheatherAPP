
import getWeather from './weather-api';

const cityInput = document.getElementById('city');
const button = document.getElementById('get-weather');
const weatherDiv = document.getElementById('weather');

button.addEventListener('click', async () => {
  const city = cityInput.value;
  const weatherData = await getWeather(city);

  if (weatherData) {
    const temperature = weatherData.main.temp;
    const weatherDescription = weatherData.weather[0].description;

    weatherDiv.innerHTML = `
      <p>Temperature: ${temperature}°C</p>
      <p>Weather: ${weatherDescription}</p>
    `;
  }
});