import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const DesktopNavBar = styled.nav`
  display: flex;
  /* margin:auto; */
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  background: #5f3739; /*linear-gradient(to right, #3a6186cb, #89253eb4); */
  opacity: 1;
  color: white;
  height: 15vh;
  box-shadow: 10px 10px 5px black;
  @media screen and (max-width: 768px) {
    display: none;
  }
  .logo {
    display: flex;
    font-size: 5vh;
    font-weight: bold;
    text-decoration: none;
    color: white;
    text-shadow: 3px 3px 3px black;
  }

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    width: 50vw;
  }

  .link {
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
  }
  img {
    height: 8vh;
    filter: brightness(0) invert(1);
  }

  a:hover {
    color: red;
  }
`;

const DesktopNav = () => {
  return (
    <DesktopNavBar>
      <Link to="/src/components/" className="logo">
        <img src={logo} alt="logo-img" />
        Airbnb Pricer
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/src/components/" className="link">
            Add Props
          </Link>
        </li>
        <li>
          <Link to="/src/components/" className="link">
            Your Props
          </Link>
        </li>
        <li>
          <Link to="/src/components/" className="link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/src/components/Login" className="link">
            LogOut
          </Link>
        </li>
      </ul>
    </DesktopNavBar>
  );
};

export default DesktopNav;
