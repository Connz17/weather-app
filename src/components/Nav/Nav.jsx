import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navigation-bar">
      <Link style={{ textDecoration: "none" }} to="/weather">
        <div className="navigation-bar__box">
          <h3 className="navigation-bar__title">Weather</h3>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/forecast">
        <div className="navigation-bar__box" >
          <h3 className="navigation-bar__title">Forecast</h3>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/sport">
        <div className="navigation-bar__box" >
          <h3 className="navigation-bar__title">Sports</h3>
        </div>
      </Link>
    </div>
  )
}

export default Nav