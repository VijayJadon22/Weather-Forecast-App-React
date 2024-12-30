import React from "react";
import { useWeather } from "../context/Weather";

const Input = (props) => {
    const weather = useWeather();
    console.log(weather);
  return (
    <input
      className="input-field"
      onChange={props.onChange}
      placeholder="Search City"
      type="text"
    />
  );
};

export default Input;
