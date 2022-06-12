import React, {useState} from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";
import FormattedDate from "./FormattedDate";
import "./Weather.css"


export default function Weather(props){
  
const [weatherData, setWeatherData] = useState({ready: false});

function handleResponse(response){
  console.log(response.data);
setWeatherData({
  ready: true,
  temperature: response.data.main.temp,
  humidity: response.data.main.humidity,
  date: new Date(response.data.dt * 1000),
  wind: response.data.wind.speed,
  city: response.data.name,
  description: response.data.weather[0].description,
});

  
}

if (weatherData.ready){
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city.."
          className="form"
          autoFocus="on"
        />
        <input type="submit" value="Search" className=" search" />
      </form>
      <ul className="date">
        <li>{weatherData.city}</li>
        <li><FormattedDate date={weatherData.date} /></li>
      </ul>
      <h1>☀️ {Math.round(weatherData.temperature)} ℃</h1>
      <p className="text-capitalize">{weatherData.description}</p>
      <ul className="component">
        
        <li>Humidity:{weatherData.humidity}%</li>
        <li>Wind:{weatherData.wind}</li>
      </ul>
    </div>
  );
} else{
const apiKey = "765f905a5ff48de4791afc288658166a";
  
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaulCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <Puff height="100" width="100" color="brown" ariaLabel="loading" />
    );
}

    
}