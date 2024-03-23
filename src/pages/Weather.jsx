import React, { useState } from 'react';
import '../Styles/weather.scss';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherInfo, setWeatherInfo] = useState(null);

  const getWeather = () => {
    const apiKey = '8077b9d3132b56e84563d8f43816e55f';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let temperature = Math.round(data.main.temp);
        let feelsLike = Math.round(data.main.feels_like);
        let humidity = data.main.humidity;
        let windSpeed = data.wind.speed;

        // Add your rain prediction logic here
        let rainPrediction = 'No rain prediction available';

        if (temperature > 20 && humidity > 60 && windSpeed < 10) {
          rainPrediction = 'It might rain soon. Not suitable for irrigation.';
        } else {
          rainPrediction = 'No rain expected. Suitable for irrigation.';
        }

        const weather = {
          location: data.name,
          temperature: `${temperature}°C`,
          feelsLike: `Feels Like: ${feelsLike}°C`,
          humidity: `Humidity: ${humidity}%`,
          wind: `Wind: ${windSpeed} km/h`,
          condition: `Weather: ${data.weather[0].description}`,
          rainPrediction: rainPrediction,
        };

        setWeatherInfo(weather);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="weather__container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      {weatherInfo && (
        <div className="weather-info">
          <h3>{weatherInfo.location}</h3>
          <p>{weatherInfo.temperature}</p>
          <p>{weatherInfo.feelsLike}</p>
          <p>{weatherInfo.humidity}</p>
          <p>{weatherInfo.wind}</p>
          <p>{weatherInfo.condition}</p>
          <p>{weatherInfo.rainPrediction}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
