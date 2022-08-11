import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../../assets/logo.jpeg";

const Navbar = () => {
const navigateHome = useNavigate()

const homeNavigate = ()=>{
  navigateHome("/")
}

  return (
    <nav className="navbar">
      <img onClick={homeNavigate} src={Logo} alt="logo" className="logo" />

      <ul className="links">
        <li>
          <Link to="/">Characters</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
