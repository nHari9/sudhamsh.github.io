import React from "react";
import "./projects.css"
import demo from '../../video/Space Stacker Lift.mp4'

function Projects() {
  return (
    <div className="project">
        <div className="pList">
        <div className="pListDesc">
          <h1>Project 1: car lift</h1>
            <p>
              This project is about car lift in heavy parking areas like hospitals , shopping malls , house
            </p>
          </div>
        <div className="video">
          <video width="480" height="auto" controls>
        <source src={demo} type="video/mp4"/>
        </video>
        </div>
        </div>
        <div className="pList">
        <div className="pListDesc">
          <h1>Project 2: car lift</h1>
            <p>
              This project is about car lift in heavy parking areas like hospitals , shopping malls , house
            </p>
          </div>
        <div className="video">
          <video width="480" height="auto" controls>
        <source src={demo} type="video/mp4"/>
        </video>
        </div>
        </div>
        <div className="pList">
        <div className="pListDesc">
          <h1>Project 3: car lift</h1>
            <p>
              This project is about car lift in heavy parking areas like hospitals , shopping malls , house
            </p>
          </div>
        <div className="video">
          <video width="480" height="auto" controls>
        <source src={demo} type="video/mp4"/>
        </video>
        </div>
        </div>
        <div className="pList">
        <div className="pListDesc">
          <h1>Project 4: car lift</h1>
            <p>
              This project is about car lift in heavy parking areas like hospitals , shopping malls , house
            </p>
          </div>
        <div className="video">
          <video width="480" height="auto" controls>
        <source src={demo} type="video/mp4"/>
        </video>
        </div>
        </div>
      </div>
  );
}

export default Projects;
