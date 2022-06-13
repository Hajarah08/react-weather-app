import React, {useState} from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css"


export default function Weather(props){
  const [city, setCity] = useState(props.defaulCity);
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
  icon: response.data.weather[0].icon,
  description: response.data.weather[0].description,
});
}
  


   function search() {
     const apiKey = "765f905a5ff48de4791afc288658166a";

     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     axios.get(apiUrl).then(handleResponse);
   }
   
function handleSubmit(event){
  event.preventDefault();
  search();
}
function handleChange(event){
setCity(event.target.value);
}

if (weatherData.ready){
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          className="form"
          autoFocus="on"
          onChange={handleChange}
        />
        <input type="submit" value="Search" className=" search" />
      </form>
      <WeatherInfo data={weatherData} />
      
    </div>
  );
} else{
      search();
    return (

      <Puff height="100" width="100" color="brown" ariaLabel="loading" />
    );
}

    
} 