import "./LandingPage.scss";
import { Link } from "react-router-dom";
import profilePicture from "../../assets/images/Circle-icons-profile.svg"
import { useState } from "react";



const LandingPage = ({user, userName, handleSubmit, handleEnter}) => {
    const [showButton, setShowButton] = useState(false);

    const handleShowButton = () => {
        if (userName == "") {
            alert("Please enter a name")
        } else {
    setShowButton(!showButton);
        }
}

  return (
    <div className="landing-page">
    <div className="landing-page__content">
        <img
          src={profilePicture}
          alt="profile"
          className="landing-page__profile"
        />
        <h2 className="landing-page__title">{userName}</h2>
        <form className="landing-page__form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            className="landing-page__input"
          /> <br />
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" className="landing-page__input" /> 
          <input type="submit" value="Save" className="landing-page__button"
          onClick={handleShowButton}/>
        </form> <br />
        { showButton && <Link style={{ textDecoration: "none" }} to="/weather">
        <button className="landing-page__button" onClick={handleEnter}>Enter</button>
        </Link>}
        
    </div>
    </div>
  )
}

export default LandingPage