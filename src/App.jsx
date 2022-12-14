import './App.scss';
import {apiKey} from "./Config";
import WeatherPage from './containers/WeatherPage/WeatherPage';
import LandingPage from './containers/LandingPage/LandingPage';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import SportPage from './containers/SportPage/SportPage';
import ForecastPage from './containers/ForecastPage/ForecastPage';

function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  const [userLocation, setUserLocation] = useState({
    latitude:"",
    longitude:""
})

  useEffect(() => {
    getLocation();
},[])

  const handleSubmit = (event) => {
    event.preventDefault();
    getLocation();
    let firstName = event.target[0].value;
    let lastName = event.target[1].value;

    if (firstName && lastName) {
      event.target.reset();
      setUser({ firstName, lastName });
    }
  };

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
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.error.TIMEOUT:
            alert("User denied the request for Geolocation.");
            break;
        case error.error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
        default:
            alert("There is an error");
    }
    });
} 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/weather"
            element={<WeatherPage userLocation={userLocation} userName={`${user.firstName} ${user.lastName}`} apiKey={apiKey}/>}>
          </Route>
          <Route path="/forecast"
            element={<ForecastPage userLocation={userLocation} userName={`${user.firstName} ${user.lastName}`} apiKey={apiKey}/>}>
          </Route>
          <Route path="/sport"
          element={<SportPage userLocation={userLocation} userName={`${user.firstName} ${user.lastName}`} apiKey={apiKey}/>}>
          </Route>
          <Route path="/"
          element={<LandingPage user={user} userName={`${user.firstName} ${user.lastName}`} handleSubmit={handleSubmit} handleEnter={getLocation}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
