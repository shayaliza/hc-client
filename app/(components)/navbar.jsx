"use client";
import Link from "next/link";
// import Image from "next/image";
import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default Navbar;
function Navbar() {
  // const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [route, setRoute] = useState("/home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // const isMenuItemActive = (path) => {
  //   return router.pathname === path;
  // };

  return (
    <nav className="bg-c3 p-4">
      <div className="flex justify-between items-center md:hidden">
        <Link href="/" className="text-c2">
          Your Logo
        </Link>
        <button className="block md:hidden text-c2" onClick={toggleMenu}>
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Responsive menu */}
      <ul className={`${menuOpen ? "block" : "hidden"} md:flex md:space-x-4`}>
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
      </ul>
    </nav>
  );
}

export default Navbar;
