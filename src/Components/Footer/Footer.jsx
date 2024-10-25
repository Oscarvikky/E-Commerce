import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import mylogo from "../Assets/mylogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={mylogo} alt="" />
        <p>OSCARVIKKY</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li> About</li>
        <li> Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <span className="whatss">
            <FaInstagram />
          </span>
        </div>
        <div className="footer-icon-container">
          <span>
            <FaPinterest />
          </span>
        </div>
        <div className="footer-icon-container">
          <span className="whats">
            <FaWhatsapp />
          </span>
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
