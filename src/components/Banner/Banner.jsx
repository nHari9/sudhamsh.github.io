import React from "react";
import "./Banner.css";
import downArr from "../../images/downArr.jpg"
import demo from '../../video/Space Stacker Lift.mp4'



function Banner() {
  return (
    <div className="content">
    <div className="banner">
        <div className="ban1">
            <div className="imag"><p>Imagination</p> </div>
            <div className="downArr"><p><img src={downArr} alt="" /></p></div>
            <div className="innov"><p>Innovation</p></div>
        </div>
        <div className="ban2">
        <div className="banDes"><p>Bridging the gap between machines and humans</p> </div>
            <div className="banDes"><p>Increasing productivity by introducing innovative tech</p></div>
        </div>
    </div>
        <div className="desc">
        <div className="video">
        <video width="680" height="auto" controls>
        <source src={demo} type="video/mp4"/>
        </video>
        </div>
        <p>
          KSJ has taken upon itself the task of facilitating India's urbanization
          by introducing state-of-the-art technology and machines that surpass
          one's wildest imagination. Our team leverages the input of your highly
          valued creative ideas to create innovative machinery that simplifies and
          streamlines your daily life.
        </p>
        <p>
          We believe that one person's struggle to achieve optimal productivity
          can be transformed into an opportunity for KS to design and engineer a
          machine that reduces the need for extensive manpower while delivering
          exceptional output. Our team of specialized engineers, well-versed in
          design and manufacturing, comprehend your obstacles and leverage them as
          a catalyst for expanding your livelihood.
        </p>
        <p>
          KS's unwavering passion is to introduce cutting-edge technology to the
          masses at an affordable cost, which fosters prosperity and elevates
          lives. From basic interior products to the intricate mechanics of IC
          engines, we have an extensive range of offerings to meet your
          requirements.
        </p>
        <p>
          Our areas of expertise span several specialized industries, including
          farming, automotive, logistics, aerospace, heavy engineering, and
          process industries.
        </p>
      </div>
      </div>
  );
}

export default Banner;
