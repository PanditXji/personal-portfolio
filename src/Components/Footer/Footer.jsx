import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-log">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-copyright">
        <p>© 2024 Vishal-Sharma. All Right Reserved</p>
      </div>
      <ul className="footer-social-media">
        {/* <li>
          <a href="">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li> */}
        <li>
          <a href="https://www.linkedin.com/in/vishal-sharma-aa3a74240">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/PanditXji">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        {/* <li>
          <a href="">
            <i className="fa-brands fa-"></i>
          </a>
        </li> */}
      </ul>
    </footer>
  );
};

export default Footer;
