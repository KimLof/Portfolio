import React, { useState } from 'react';
import styles from '../css/WeatherApp.css';
import cloudsImage from '../images/clouds.png';
import clearImage from '../images/clear.png';
import snowImage from '../images/snow.png';
import rainImage from '../images/rain.png';
import thunderstormImage from '../images/thunderstorm.png';
import mistImage from '../images/mist.png';
import errorImage from '../images/404.png';
import drizzleImage from '../images/drizzle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';





const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);

    const feather = (weatherData) => {
        switch (weatherData.weather[0].main) {
            case 'Clouds':
                return cloudsImage;
            case 'Clear':
                return clearImage;
            case 'Snow':
                return snowImage;
            case 'Rain':
                return rainImage;
            case 'Thunderstorm':
                return thunderstormImage;
            case 'Mist':
                return mistImage;
            case 'Drizzle':
                return drizzleImage;
            default:
                return '';
        }
    }

  
    const fetchWeather = () => {
      if (!city) return;
  
      const APIKey = '309279414fa3d50a47854b04cde0caf4';
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
          if (data.cod === '404') {
            setError(true);
            console.log("error " + data);
            setWeatherData(null);
          } else {
            setError(false);
            setWeatherData(data);
            console.log(data);
          }
        })
        .catch(() => setError(true));
    };
  
    return (
      <div className="weatherContainer" style={{ height: error || !weatherData ? '400px' : '590px' }}>
        <div className="weatherSearch-box">
        <FontAwesomeIcon icon={faLocationDot} />
          <input
            type="text"
            placeholder="Enter your location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={fetchWeather}> <FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
        </div>
  
        {error  && (
          <div className="not-found">
            <img src ={errorImage} alt="Not found"/>
            <p>Oops! Invalid location :/</p>
          </div>
        )}
        {weatherData && (
          <>
            <div className="weather-box">
                <img src={feather(weatherData)} alt={weatherData.weather[0].main} />
              <p className="temperature">{parseInt(weatherData.main.temp)}<span>°C</span></p>
              <p className="description">{weatherData.weather[0].description}</p>
            </div>
  
            <div className="weather-details">
              <div className="humidity">
                <i className="fa-solid fa-water"></i>
                <div className="text">
                  <span>{weatherData.main.humidity}%</span>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="wind">
                <i className="fa-solid fa-wind"></i>
                <div className="text">
                  <span>{parseInt(weatherData.wind.speed)}m/s</span>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };
  
  export default WeatherApp;