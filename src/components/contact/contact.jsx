import React from "react";
import "./contact.css"
import pic1 from "../../images/CEO.PNG"
import pic2 from "../../images/Soumith.jpg"

function Contact() {
  return (
    <div className="contact">
        <div className="CnctCard">
          <div className="CnctList">
          <div className="cnctPic">
            <div>
              <img src={pic1} alt="" />
            </div>
          <h1>sudhmash
          CEO
          </h1>
          </div>
          <div>
          <h1>
          Contact
Address: Bowenpally, Secunderabad - 500011.

phone : 7396673893

Email: ksjsolutions@gmail.com
          </h1>
          </div>
          </div>
          <div className="CnctList">
          <div className="cnctPic">
          <div>
              <img src={pic2} alt="" />
            </div>
          <h1>soumith
          CEO
          </h1>
          </div>
          <div>
          <h1>
          Contact
Address: 24 neroli Crs , Truganina , AUS.

phone : 7396673893

Email: ksjsolutions@gmail.com
          </h1>
          </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;
