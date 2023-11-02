"use client";
import React from "react";
import "./style2.css";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMessage,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container font-f2">
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
          <h2 className="font-f2">Page list</h2>
          <div className="col_of_2row">
            <ul>
              <li>Home</li>
              <li>Health</li>
              <li>Workout</li>
              <li>Chronic</li>
            </ul>
          </div>
        </div>

        <div className="row3 w-1/5">
          <h2 className="font-f2">Page List</h2>
          <div className="col_of_3row">
            <ul>
              <li>Calculator</li>
              <li>Woemn</li>
              <li>Mental Health</li>
              <li>Game</li>
            </ul>
          </div>
        </div>

        <div className="row4 w-1/5">
          <h2 className="font-f2">Start Journey</h2>
          <div className="col_of_4row">
            <ul>
              <li>login</li>
              <li>signup</li>
              <li>Add your hospital</li>
            </ul>
          </div>
        </div>

        <div className="row5 w-1/5">
          <h2 className="font-f2">Social Links</h2>
          <div className="col_of_5row">
            <ul>
              <h2>
                <span className="flex space-x-6">
                  {" "}
                  <AiFillLinkedin />
                  <AiFillInstagram />
                  <AiFillFacebook />
                  <AiFillGithub />
                  <AiFillMessage />
                </span>
              </h2>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright text-center ml-2 mb-6 pt-5 pb-5">
        <p className="text-gray-500  text-lg">
          {new Date().getFullYear()} Vital flow by HackWeb All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
