import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 23.33,
    humidity: 38,
    temp: 26.05,
    tempMax: 26.05,
    tempMin: 26.05,
    weather: "haze"
  });

  let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Weather App by Delta</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  )
}