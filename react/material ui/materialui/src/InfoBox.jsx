import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from "@mui/icons-material/Thunderstorm"
import "./InfoBox.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function InfoBox( {info}) {
  const INIT_URL= "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  const HOT_URL= "https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?a=1&b=1&s=612x612&w=0&k=20&c=TD95uCJmBIrWzvqYSoG5v1bb0gbaUXof4RN8xWop_qg=";
  const COLD_URL ="https://plus.unsplash.com/premium_photo-1675827055668-2dae1b8ac181?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAIN_URL ='https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
//   let info = {
//     city:"Delhi",
//     feelsLike: 23.33,
// humidity: 38,
// temp: 26.05,
// tempMax: 26.05,
// tempMin: 26.05,
// weather: "haze"
//   };
  return (
    <div className="InfoBox">
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL: info.temp> 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity > 80 ? <ThunderstormIcon />: info.temp > 15 ? <WbSunnyIcon />: <AcUnitIcon />}

        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         <p>Temperature={info.temp}&deg;C </p>
         <p>Humidity={info.humidity} </p>
         <p>Min Temp ={info.tempMin}&deg;C </p>
         <p>Max temp ={info.tempMax}&deg;C </p>
         <p>the weather feelsLike ={info.feelsLike} </p>
        </Typography>
      </CardContent>
    </Card></div>
    </div>
  )
}