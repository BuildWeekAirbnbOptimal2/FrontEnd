import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function NavLinks() {
  return (
    <div className="">
      <div>
        <Link to="/src/components/" className="logo">
          Airbnb Pricer
          <img src={logo} alt="logo-img" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/src/components/" className="link hidden">
              Add Props
            </Link>
          </li>
          <li>
            <Link to="/src/components/" className="link hidden">
              View Props
            </Link>
          </li>
          <li>
            <Link to="/src/components/" className="link hidden">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/src/components/Login" className="link hidden">
              LogOut
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavLinks;
