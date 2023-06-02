import React from "react";
import "./footer.css";
import { SocialIcon } from 'react-social-icons';
// import Logo from "../../images/KSJ_Logo.png"


function Footer() {
  return (
    <div className="footer">
        <div className="footerLogo">
          {/* <img src={Logo} alt="" /> */}
          <h1>KSJ where imagination meets innovation</h1>
        </div>
        <div className="footerContact">
          <div className="contactLogos">
            <div><h2>Connect</h2></div>
            <div ><SocialIcon url="https://instagram.com/KSJSolutions"  /><span> </span>
            <SocialIcon url="https://facebook.com" /><span> </span>
            <SocialIcon url="https://twitter.com/jaketrent" /></div>
          </div>
          <div className="footerAdd">
          <div><h2>Contact</h2></div>
            <address><p> Address:  Bowenpally, Secunderabad - 500011.</p></address>
            <address> <p>phone : 7396673893</p></address>
            <address><p>Email: ksjsolutions@gmail.com</p> </address>
          </div>
        </div>
    </div>
  );
}

export default Footer;
