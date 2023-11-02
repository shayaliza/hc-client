"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [route, setRoute] = useState("/home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-c3 p-4 flex  lg:justify-center items-center">
      <div className="flex justify items-center lg:hidden ">
        <Link href="/" className="text-c2">
          <Image
            src="/logo.png"
            alt="not loaded"
            width={70}
            height={70}
            className="-mt-5 -mb-5 "
          />
        </Link>
        <button className="block lg:hidden text-c2   " onClick={toggleMenu}>
          {menuOpen ? (
            ""
          ) : (
            <h2 className="-mt-7 -mb-5 ">
              <BiMenu />
            </h2>
          )}
        </button>
      </div>

      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:flex lg:space-x-4  flex-1`}
      >
        <li>
          <a
            href="/"
            className={`
          ${route === "/home" ? " text-c1" : " text-c2"}`}
            onClick={closeMenu}
          >
            Home
          </a>
        </li>
        <li>
          <Link
            href="/health"
            passHref
            className={`
            ${route === "/health" ? "text-c1" : " text-c2"}`}
            onClick={() => {
              closeMenu();
              setRoute("/health");
            }}
          >
            Health
          </Link>
        </li>
        <li>
          <Link
            href="/workout"
            passHref
            className={`
            ${route === "/workout" ? "text-c1" : " text-c2"}`}
            onClick={() => {
              closeMenu();
              setRoute("/workout");
            }}
          >
            Workout
          </Link>
        </li>
        <li>
          <Link
            href="/chronic"
            passHref
            className={` 
            ${route === "/chronic" ? "text-c1" : " text-c2"}`}
            onClick={() => {
              closeMenu();
              setRoute("/chronic");
            }}
          >
            Chronic
          </Link>
        </li>
        <li>
          <Link
            href="/calculator"
            passHref
            className={`
            ${route === "/calculator" ? "text-c1" : " text-c2"}`}
            onClick={() => {
              closeMenu();
              setRoute("/calculator");
            }}
          >
            Calculator
          </Link>
        </li>
        <li>
          <Link
            href="/womaniya"
            passHref
            className={`
            ${route === "/women" ? "text-c1" : " text-c2"}`}
            onClick={() => {
              closeMenu();
              setRoute("/women");
            }}
          >
            Women
          </Link>
        </li>
        <li>
          <Link
            href="/mentalHealth"
            passHref
            className={`
            ${route === "/mentalHealth" ? "text-c1" : " text-c2"}`}
            onClick={() => {
              closeMenu();
              setRoute("/mentalHealth");
            }}
          >
            Mental Health
          </Link>
        </li>
        <li>
          <Link
            href="/game"
            passHref
            className={`
            ${route === "/game" ? "text-c1" : " text-c2"}`}
            onClick={() => {
              closeMenu();
              setRoute("/game");
            }}
          >
            Game
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            passHref
            className={` 
            ${route === "/login" ? "text-c1" : " text-c2"}`}
            onClick={() => {
              closeMenu();
              setRoute("/login");
            }}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/signup"
            passHref
            className={` 
            ${route === "/signup" ? "text-c1" : " text-c2"}`}
            onClick={() => {
              closeMenu();
              setRoute("/signup");
            }}
          >
            Signup
          </Link>
        </li>
        {/* <li className="ml-auto">Vital Flow</li> */}
      </ul>
      {/* make this two span only see when the above logo is note there */}
      {/* <span className="ml-auto "> */}
      <span className={`max-lg:hidden ${menuOpen ? "hidden" : "ml-auto"}`}>
        <Image
          src="/logo.png"
          alt="not loaded"
          width={70}
          height={70}
          className="-mt-5 -mb-5"
        />
      </span>
      <span className={`max-lg:hidden  ${menuOpen ? "hidden" : "ml-auto"}`}>
        vital flow
      </span>
    </nav>
  );
}

export default Navbar;
