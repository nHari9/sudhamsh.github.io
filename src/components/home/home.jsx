import React from "react";
import "./home.css";
import gear from "../../images/gear.jpg";

function Home() {
  return (
    <div className="content">
      <div className="intro">
        <div className="introImg">
        <img src={gear} alt="" />
        </div>
        <div className="matter">
        <h1>WE MAKE IT REAL</h1>
        <p>
          We take fictional ideas from you and make real working prototypes as a
          way to make your life easy, using science, technology and
          engineering!
        </p>
      </div>
      </div>
    </div>
  );
}

export default Home;
