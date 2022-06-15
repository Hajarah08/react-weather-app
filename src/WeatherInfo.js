import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
      <div className="weatherInfo">
        <ul className="date">
          <li>{props.data.city}</li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
        <h1>
          <span>
            <WeatherIcon code={props.data.icon} />
          </span>{" "}
          <WeatherTemperature celsius={props.data.temperature} />
          
        </h1>
        <p className="text-capitalize">{props.data.description}</p>
        <ul className="component">
          <li>Humidity:{props.data.humidity}%</li>
          <li>Wind:{props.data.wind}km/h</li>
        </ul>
      </div>
    );
}

