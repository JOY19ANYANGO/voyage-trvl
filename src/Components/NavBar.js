import React from "react";
import {Link} from "react-router-dom"
import logo from "./Images/Group 1logo.png";
import "./Style/NavBar.css";

function NavBar() {
  return (
    <header className="Navbar">
      <img src={logo} className="image" alt="logo" />
    <div className="List">  <ul className="list" >
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/AboutUs">AboutUs</Link></li>
        <li> <Link to="/Reviews">Reviews</Link></li>
        <li> <Link to="/Places">Places</Link></li>
        <li> <Link to="/Contacts">Contacts</Link></li>
      </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        classsName="cart"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-cart3"
        viewBox="0 0 16 16"
        style={{ marginTop: "-120px", marginLeft: "1120px", color: "white" }}
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
      <button
        type="button"
        className="btn btn-dark"
        style={{
          color: "white",
          marginTop: "-65px",
          float: "right",
          marginRight: "65px",
          borderRadius: "100px",
        }}
      >
        Sign in
      </button>
    </header>
  );
}

export default NavBar;
