import "./WeatherCard.scss";


const WeatherCard = ({day, highTemp, lowTemp, weather, icon, amTemp, pmTemp, amWeather, pmWeather}) => {
  

  
    return (
    <div>
        <h4>{day}</h4>
        <h4>{highTemp}</h4>
        <h4>{lowTemp}</h4>
        <h4>{weather}</h4>
        <h4>{icon}</h4>
        <h4>{amTemp}</h4>
        <h4>{amWeather}</h4>
        <h4>{pmTemp}</h4>
        <h4>{pmWeather}</h4>
    </div>
  )
}

export default WeatherCard