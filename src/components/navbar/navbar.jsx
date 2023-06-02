import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header">
        <div>  <Link to="/about" style={{ textDecoration: 'none' }}><p>ABOUT</p></Link>  </div>
        <div>  <Link to="/projects" style={{ textDecoration: 'none' }}><p>PROJECTS</p></Link>   </div>
        <div>   <Link to="/" style={{ textDecoration: 'none' }}> <h1>KSJ</h1> </Link>  </div>
        <div>   <Link to="/careers" style={{ textDecoration: 'none' }}><p>CAREERS</p></Link>  </div>
        <div>   <Link to="/contact" style={{ textDecoration: 'none' }}><p>CONTACT</p></Link>   </div>
    </div>
  );
}

export default Header;
