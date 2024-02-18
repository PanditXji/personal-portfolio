import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            HTML
            <br /> CSS
            <br /> Javascript
            <br /> MongoDB
            <br /> Express.js
            <br /> React.js
            <br /> Node.js
            <br /> Git & Github
          </p>
          <button>Hire Me</button>
        </div>
        <div className="service-item-conatiner">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc"></div>
            <h3>Web Developement</h3>
            <p>
              Profficient in creating website using html,css and
              javascript,Mongodb,Express.js,React.js & Node.js
            </p>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc"></div>
            <h3>Desktop Developement</h3>
            <p>
              Profficient in creating website using html,css and javascript for
              Desktop.
            </p>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet"></i>
            <div className="item-desc"></div>
            <h3>Frontend Developement</h3>
            <p>Creating Websites using react.js.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
