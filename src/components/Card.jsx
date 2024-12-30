import React from "react";
import Input from "./Input";
import Button from "./Button";
import { useWeather } from "../context/Weather";

const Card = () => {
  const weather = useWeather();
  const data = weather.data;

  return (
    <div className="card-container">
      <div className="left">
        <div>
          <img src={data?.current.condition.icon} alt="weather-image" />
          <h2>{data?.current.temp_c}°c</h2>
          <p>{data?.current.condition.text}</p>
        </div>
        <div>
          <h2>{data?.location.name}, {data?.location.region}, {data?.location.country}</h2>
          <p>{data?.location.localtime}</p>
        </div>
      </div>
      <div className="right">
        <div className="search-box">
          <Input onChange={(e) => weather.setSearchCity(e.target.value)} />
          <Button value="Search" onClick={weather.fetchData} />
        </div>
        <div className="key-value-div">
          <p className="data-field">Precipitation</p>
                  <p className="data-field">{data?.current.precip_in}in</p>
        </div>
        <div className="key-value-div">
          <p className="data-field">Humidity</p>
          <p className="data-field">{data?.current.humidity}%</p>
        </div>
        <div className="key-value-div">
          <p className="data-field">Wind</p> <p className="data-field">{data?.current.wind_kph}km/h</p>
        </div>
        <div className="key-value-div">
          <p className="data-field">Pressure</p>{" "}
          <p className="data-field">{data?.current.pressure_mb}mb</p>
        </div>
        <div className="key-value-div">
          <p className="data-field">Visibility</p>
          <p className="data-field">{data?.current.vis_km}Km</p>
        </div>
        <div className="key-value-div">
          <p className="data-field">Feels like</p>
          <p className="data-field">{data?.current.feelslike_c}°c</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
