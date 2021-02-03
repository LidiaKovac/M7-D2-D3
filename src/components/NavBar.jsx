import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/Navbar.scss";
import Logo from "../assets/PH.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-wrap">
        
         
          <div className="profile">PROFILE</div>
        
        <Link to="/">
        <img className="logo" src={Logo} />
        </Link>
        <div className="git">GITHUB</div>
      </div>
    );
  }
}
export default Navbar;
