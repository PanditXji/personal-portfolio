import React from "react";
import "./Header.css";
import Typical from "react-typical";
import profileImg from "../../assets/profile.png";
const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header-content">
          <h1>Hy! Am</h1>
          <h2 className="fullname">Vishal Sharma</h2>
          <h2>
            I'm a {""}
            <Typical
              steps={[
                "Full Stack Developer 🚀",
                1000,
                "Frontend Developer 💥",
                1000,
                "Backend Developer 🔋",
                1000,

                "React Developer 💞",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </h2>
          <p>
            An Enthusiatic fresher , passionate for software developement.I am
            seeking a position to utilize my skills and abilities to start up my
            career that offers professional growth.
          </p>
          <div className="header-payment-container">
            <button>Hire Me</button>
            <i className="fa-brands fa-paypal"></i>
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-amex"></i>
          </div>
        </div>
        <div className="profile-img-container">
          <img src={profileImg} alt="profile" />
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
