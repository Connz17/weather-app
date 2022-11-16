import "./WeatherCard.scss";


const WeatherCard = ({day, highTemp, lowTemp, weather, icon, amTemp, pmTemp, amWeather, pmWeather, avgTemp}) => {
  

  
    return (
    <div className="weather-card">
        <h3 className="weather-card__date">{day}</h3>
        <h4 className="weather-card__h-temp">Days's high {highTemp}&deg;C</h4>
        <h4 className="weather-card__l-temp">Day's low {lowTemp}&deg;C</h4>
        <h4 className="weather-card__a-temp">Average temperature {avgTemp}&deg;C</h4>
        <h4 className="weather-card__weather">{weather}</h4>
        <img className="weather-card__img" src={icon} alt="todays weather" />
        <h5 className="weather-card__am-temp">Morning {amTemp}&deg;C</h5>
        <h5 className="weather-card__am-weather">{amWeather}</h5>
        <h5 className="weather-card__pm-temp">Evening {pmTemp}&deg;C</h5>
        <h5 className="weather-card__pm-weather">{pmWeather}</h5>
    </div>
  )
}

export default WeatherCard