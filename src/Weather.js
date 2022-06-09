import React from "react";
import "./Weather.css"

export default function Weather(){
    return (
      <div className="Weather">
        <form>
          <input type="search" placeholder="Enter a city.." className="form" autoFocus="on" />
          <input type="submit" value="Search" className=" search" />
        </form>
        <ul>
          <li>Lagos, Nigeria</li>
          <li>06/09/2022</li>
        </ul>
        <h1>☀️ 32</h1>
        <p>Mostly Sunny</p>
        <ul>
          <li>Papitation</li>
          <li>Humidity</li>
          <li>Wind</li>
        </ul>
      </div>
    );
}