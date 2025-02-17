
import './App.css'
import Button from "@mui/material/Button";
import SearchBox from "./SearchBox.jsx";
import InfoBox from './InfoBox.jsx';
import WeatherApp from './WeatherApp.jsx';

function App() {
  // let handleClick = () =>{
  //   console.log("button was clicked");
  // }
  return (
    <>
    {/* <h1>material ui demo</h1>
    <Button variant="contained" onClick={handleClick}>click me</Button>
    <Button variant="contained" onClick={handleClick} 
    color="success">click me</Button>
    <Button variant="contained" onClick={handleClick} color="error" size="large">click me</Button> */}

    {/* <SearchBox/>
    <InfoBox/> */}
    <WeatherApp/>
    </>
  )
  
}

export default App;
