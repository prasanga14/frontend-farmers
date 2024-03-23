import React, { useState, useEffect } from 'react';
import '../Styles/weatherCard.scss';

export default function WeatherCard() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data based on user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const apiKey = '8077b9d3132b56e84563d8f43816e55f';
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

          try {
            const response = await fetch(url);
            if (response.ok) {
              const data = await response.json();
              setWeatherData(data);
            } else {
              throw new Error('Failed to fetch weather data');
            }
          } catch (error) {
            console.error('Error fetching weather data:', error);
          }
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  };

  return (
    <div className="weatherContainer">
      {weatherData && (
        <div className="card">
          <div className="city">{weatherData.name}</div>
          <div className="date">
            {new Date(weatherData.dt * 1000).toLocaleDateString()}
          </div>
          <img
            className="weatherIcon"
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="icon"
          />
          <div className="temperature">{weatherData.main.temp}°C</div>
        </div>
      )}
    </div>
  );
}
