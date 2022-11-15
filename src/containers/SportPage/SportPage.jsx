import "./SportPage.scss";
import { useEffect, useState } from "react";


const SportPage = ({userLocation, userName, errorMessage, apiKey}) => {

    const [sportData, setSportData] = useState([])


    const getSportsData = async () => {
        const res = await fetch(`http://api.weatherapi.com/v1/sports.json?key=${apiKey}&q=${userLocation.latitude},${userLocation.longitude}&aqi=no`);
        const data = await res.json();
        console.log(data);
        setSportData(data.football)
        console.log(sportData); 
        };
    
        useEffect(() => {
            getSportsData();
        },[])

        const footballJSX = sportData.map((match, index) =>{
            return(
                <div key={index}>
                    
                </div>
            )
            })



  return (
    <div>SportPage</div>
  )
}

export default SportPage