import TextField from "@mui/material/TextField";
//  npm install multiple style from installation material ui website
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
let [city, setCity] = useState("");
let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1031e82180981b48e6b9fba105594774";
  
let getWeatherInfo = async () =>{
  try{
  // await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
  // it is complete url mentioned in weather api website 
  let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  let jsonResponse = await response.json();
  console.log(jsonResponse);
  let result = {
    city:city,
    temp: jsonResponse.main.temp,
    tempMin:jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,
    humidity:jsonResponse.main.humidity,
    feelsLike:jsonResponse.main.feelsLike,
    weather:jsonResponse.weather[0].description,
  }
  console.log(result);
  return result;
  }catch(err) {
    throw err;
  }
}
  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit =async (evt) => {
    try{
    evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    } catch(err){
      setError(true);
    }
  }
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" varient="outlined"
          value={city}
          onChange={handleChange} required />
        <br /><br />
        <Button variant="contained" type="submit"  >Search</Button>
        {error && <p style={{color:"red"}}>no such place exist in api.</p> }
      </form>
    </div>
  )
}