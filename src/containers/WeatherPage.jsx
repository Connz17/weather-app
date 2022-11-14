import "./WeatherPage.scss";
import sunrise from "../assets/images/morning-icon.svg"
import sun from "../assets/images/lights-sunlight-svgrepo-com.svg"
import moon from "../assets/images/moon-night-svgrepo-com.svg"
import { useEffect, useState } from "react";


const WeatherPage = () => {
    const [userLocation, setUserLocation] = useState({
        latitude:0,
        longitude:0
    })
    const [errorMessage , setErrorMessage] = useState("")
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

    // const apiKey = "944306eef47343d792e142554220911";

const getLocation = () =>{
            navigator.geolocation.getCurrentPosition((position) =>{
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setUserLocation({latitude, longitude})
                console.log(userLocation);
                
            },
            (error) => {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    setErrorMessage("User denied the request for Geolocation.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    setErrorMessage("Location information is unavailable.");
                    break;
                case error.error.TIMEOUT:
                    setErrorMessage("User denied the request for Geolocation.");
                    break;
                case error.error.UNKNOWN_ERROR:
                    setErrorMessage("An unknown error occurred.");
                    break;
                default:
                    setErrorMessage("There is an error");
            }
            console.log(errorMessage);
            });
        } 

    const getWeatherData = async () => {
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=944306eef47343d792e142554220911&q=${userLocation.latitude},${userLocation.longitude}&aqi=no`);
    const data = await res.json();
    console.log(data);
    setWeatherData(data)
    console.log(weatherData);
    };

    useEffect(() => {
        getWeatherData();
        getLocation();
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
    <div>
        <img className="greeting__image" src={greetingImg} alt={greetingTime} />
        <h1>Good {greetingTime}</h1>
    </div>
    <div>
        <button onClick={getWeatherData}>Get weather</button>
        <h3>{weatherData.location.country}</h3>
        <h3>{weatherData.location.region}</h3>
        <h3>{weatherData.location.name}</h3>
        <img src={weatherData.current.condition.icon} alt="" />
        <h3>{weatherData.current.condition.text}</h3>
        <h3>{weatherData.current.temp_c}</h3>
        <h3>{weatherData.current.feelslike_c}</h3>
        <h3>{errorMessage}</h3>
    </div>
    </>
)
}

export default WeatherPage