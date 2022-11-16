import "./SportPage.scss";
import { useEffect, useState } from "react";
import FootballCard from "../../components/FootballCard/FootballCard";
import Nav from "../../components/Nav/Nav";


const SportPage = ({userLocation, userName, errorMessage, apiKey}) => {

    const [sportData, setSportData] = useState([])


    const getSportsData = async () => {
        const res = await fetch(`https://api.weatherapi.com/v1/sports.json?key=${apiKey}&q=${userLocation.latitude},${userLocation.longitude}&aqi=no`);
        const data = await res.json();
        console.log(data.football);
        setSportData(data.football);
        console.log(sportData); 
        };
    
        useEffect(() => {
            getSportsData();
        },[])

        const footballJSX = sportData.map((game, index) =>{
            return(
                <div key={index}>
                    <FootballCard stadium={game.stadium} tournament={game.tournament} start={game.start} match={game.match}/>
                </div>
            )
            })



  return (
    <>
    <Nav/>
    <h2>{userName} here is today's sport</h2>
    <div>
        {footballJSX}
    </div> 
    </>
  )
}

export default SportPage