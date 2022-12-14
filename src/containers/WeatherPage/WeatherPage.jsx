import "./WeatherPage.scss";
import sunrise from "../../assets/images/morning-icon.svg"
import sun from "../../assets/images/lights-sunlight-svgrepo-com.svg"
import moon from "../../assets/images/moon-night-svgrepo-com.svg"
import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";


const WeatherPage = ({userLocation, userName, apiKey}) => {

    const [weatherData, setWeatherData] = useState({
        location:{
            name:"",
            region:"",
            country:"",
            localtime:"",
        },
        current:{
            temp_c:"",
            feelslike_c:"",
            condition:{
                text:"",
                icon:"",
            }
        }
    })

    



    const getWeatherData = async () => {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userLocation.latitude},${userLocation.longitude}&aqi=no`);
    const data = await res.json();
    console.log(data);
    setWeatherData(data)
    console.log(weatherData);
    };

    useEffect(() => {
        getWeatherData();
    },[])




    const currentHour = weatherData.location.localtime.slice(11,13);
    let greetingImg = sunrise;
    let greetingTime = "Morning!";

    if (currentHour >= 12) {
        greetingImg = sun;
        greetingTime = "Afternoon!";
    }

    if (currentHour >= 18) {
        greetingImg = moon;
        greetingTime = "Evening!";
    }



return (
    <>
    <Nav/>
    <div>
        <img className="greeting__image" src={greetingImg} alt={greetingTime} />
        <h1>Good {greetingTime}</h1>
        <h2>{userName}</h2>
    </div> <br />
    <div className="weather">
        <h2>The lowdown for todays weather for where you are  is as follows</h2>
        <h3>Country: {weatherData.location.country}</h3>
        <h3>Region: {weatherData.location.region}</h3>
        <h3>City: {weatherData.location.name}</h3> <br />
        <h3>Current weather is {weatherData.current.condition.text}</h3>
        <img className="weather__image" src={weatherData.current.condition.icon} alt="current weather" />
        <h3>Actual temperature {weatherData.current.temp_c}&deg;C</h3>
        <h3>Feels like {weatherData.current.feelslike_c}&deg;C</h3>
    </div>
    </>
)
}

export default WeatherPage