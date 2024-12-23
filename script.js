// OpenWeatherMap API Configuration
const API_KEY = 'e8d1a2a2fd74a70eff7370615db7c2d8'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const locationEl = document.getElementById('location');
const temperatureEl = document.getElementById('temperature');
const descriptionEl = document.getElementById('description');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');

// Fetch Weather Data
async function fetchWeather(city) {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    updateWeatherUI(data);
  } catch (error) {
    alert(error.message);
  }
}

// Update UI with Weather Data
function updateWeatherUI(data) {
  const { name, sys, main, weather, wind } = data;
  locationEl.textContent = `${name}, ${sys.country}`;
  temperatureEl.textContent = `${Math.round(main.temp)}°C`;
  descriptionEl.textContent = weather[0].description;
  humidityEl.textContent = main.humidity;
  windSpeedEl.textContent = wind.speed;
}

// Search Button Event Listener
searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) fetchWeather(city);
});

