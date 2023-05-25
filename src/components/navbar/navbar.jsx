import React from "react";
import "./navbar.css";
import Logo from "../../images/KSJ_Logo.png"
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header">
      <div className="nav1" >
        <img src={Logo} alt="" />
      </div>
      <div className="nav2">
        <div>  <Link to="/"><p>HOME</p></Link>  </div>
        <div>  <Link to="/projects"><p>PROJECTS</p></Link>   </div>
        <div>   <Link to="/about"><p>ABOUT</p></Link>  </div>
        <div>   <Link to="/careers"><p>CAREERS</p></Link>  </div>
        <div>   <Link to="/contact"><p>CONTACT</p></Link>   </div>
      </div>
    </div>
  );
}

export default Header;
