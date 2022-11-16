import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import "./ForecastPage.scss";


const ForecastPage = ({userLocation, userName, apiKey}) => {

    const [forecastData, setForecastData] = useState([])
    const [forecastRange, setForecastRange] = useState("3")

    const getForecastData = async () => {
        const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${userLocation.latitude},${userLocation.longitude}&days=${forecastRange}&aqi=no`);
        const data = await res.json();
        console.log(data.forecast.forecastday);
        setForecastData(data.forecast.forecastday);
        };console.log(forecastData);

        useEffect(() => {
            getForecastData();
        },[forecastRange])

        const getForecastValue = (event) => {
            setForecastRange(event.target.value);
            console.log(event.target.value);
        };console.log(forecastRange);

        const forecastJSX = forecastData.map((forecast, index) =>{
            return(
                <div key={index}>
                    <WeatherCard day={forecast.date} avgTemp={forecast.day.avgtemp_c} highTemp={forecast.day.maxtemp_c} lowTemp={forecast.day.mintemp_c} weather={forecast.day.condition.text} icon={forecast.day.condition.icon} amTemp={forecast.hour[10].temp_c} pmTemp={forecast.hour[17].temp_c} amWeather={forecast.hour[10].condition.text} pmWeather={forecast.hour[17].condition.text}/>
                </div>
            )
        })

  return (
    <>
    <Nav/>
    <h2>Please select how many days you want forecast</h2>
    <div>
        <label htmlFor="three">3</label>
        <input className="input-select" type="radio" name="forecast_range" id="three" value={3} onClick={getForecastValue}/>
        <label htmlFor="five">5</label>
        <input className="input-select" type="radio" name="forecast_range" id="five" value={5} onClick={getForecastValue}/>
        <label htmlFor="seven">7</label>
        <input className="input-select" type="radio" name="forecast_range" id="seven" value={7} onClick={getForecastValue}/>
        <label htmlFor="ten">10</label>
        <input className="input-select" type="radio" name="forecast_range" id="ten" value={10} onClick={getForecastValue}/>
    </div> <br />
    <h3>{userName} your forecast for the following {forecastRange} days</h3> <br />
    <div className="card-container">
        {forecastJSX}
    </div>
    </>
  )
}

export default ForecastPage