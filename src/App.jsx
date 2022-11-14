import './App.scss';
import WeatherPage from './containers/WeatherPage';
import LandingPage from './containers/LandingPage/LandingPage';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let firstName = event.target[0].value;
    let lastName = event.target[1].value;

    if (firstName && lastName) {
      event.target.reset();
      setUser({ firstName, lastName });
    }
  };


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Weather"
            element={<WeatherPage/>} 
          ></Route>
          <Route path="/"
          element={<LandingPage userName={`${user.firstName} ${user.lastName}`} handleSubmit={handleSubmit}/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
