import React, { useState, useEffect } from 'react';
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
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';






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


    const showWeatherModal = (event) => {
      event.stopPropagation(); // This stops the click event from reaching the SVG element.

      if(document.querySelector('.WeatherModal') === null) {
          console.log("omena");
      return;
      }

      const modal = document.querySelector('.WeatherModal');

      if (modal.style.display === 'block') {
          modal.style.display = 'none';
      } else
      modal.style.display = 'block';
  }

          // modal close if pressed outside
          window.onclick = function(event) {
            if(document.querySelector('.WeatherModal') === null) {
                console.log(event.target);
            return;    
            }

            console.log(event.target);

            const modal = document.querySelector('.WeatherModal');

            if (event.target !== modal && !event.target.classList.contains('weatherInfo')){
            modal.style.display = 'none';
            }
        }




        //When enter pressd in input field fetch weather
useEffect(() => { 
  const handleEnter = (event) => {
    if(event.key === 'Enter') {
      fetchWeather();
    }
  }
  window.addEventListener('keydown', handleEnter); 
  return () => {
    window.removeEventListener('keydown', handleEnter);
  }
}
, [city]);



  
    return (
      <div className='weatherHeader'>
        <h1 className="weatherInfo" onClick={(event) => showWeatherModal(event)} >Weather App <FontAwesomeIcon icon={faCircleInfo} /></h1>
      <div className="weatherContainer" style={{ height: error || !weatherData ? '400px' : '590px' }}>
        <div className="weatherSearch-box">
        <p className='asd'><FontAwesomeIcon icon={faLocationDot} /></p>
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
          {/* Modal for site info */}
          <div className="WeatherModal" style={{ display: 'none' }} >
            <div className="Weather-modal-content">
              <h2>Weather App</h2>
              <p>Weather app is a simple weather application that uses OpenWeatherMap API to fetch weather data. The app is built with React and styled with CSS. The app uses FontAwesome icons and images from OpenWeatherMap API. The app is a part of my portfolio. </p>
            </div>
          </div>
      </div>
    );
  };

  
  
  export default WeatherApp;