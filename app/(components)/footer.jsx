"use client";
import React from "react";
import "./style2.css";
import Image from "next/image";
// import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="row1 mt-15">
          {/* <h2>Vital flow</h2> */}
          <div className="col_of_1row w-1/5">
            <ul>
              <li>
                <Image
                  src="/logoc.png"
                  alt="not loaded"
                  width={300}
                  height={300}
                  className=" -mt-16 -mb-3"
                />
              </li>
            </ul>
            <div className="button">Contact Us</div>
          </div>
        </div>

        <div className="row2 w-1/5">
          <h2>Page list</h2>
          <div className="col_of_2row">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Testimonial</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="row3 w-1/5">
          <h2>More info</h2>
          <div className="col_of_3row">
            <ul>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div>
        </div>

        <div className="row4 w-1/5">
          <h2>Open Hours</h2>
          <div className="col_of_4row">
            <ul>
              <li>
                <i className="fa-regular fa-clock"></i> Monday-Thursday
              </li>
              <li>
                <i className="fa-regular fa-clock"></i> Friday
              </li>
              <li>
                <i className="fa-regular fa-clock"></i> Saturday
              </li>
              <li>
                <i className="fa-regular fa-clock"></i> Sunday
              </li>
            </ul>
          </div>
        </div>

        <div className="row5 w-1/5">
          <h2>Open Hours</h2>
          <div className="col_of_5row">
            <ul>
              <h2>
                <span className="flex space-x-6">
                  {" "}
                  <AiFillLinkedin />
                  <AiFillLinkedin />
                  <AiFillLinkedin />
                  <AiFillLinkedin />
                </span>
              </h2>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright text-center ml-2 mb-6 pt-5 pb-5">
        <p className="text-gray-500 text-sm">
          {new Date().getFullYear()} Vital flow by HackWeb All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
