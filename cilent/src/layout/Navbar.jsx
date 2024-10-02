import React from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import arrowdown from "../assets/arrowDown.svg";
import search from "../assets/searchIcon.svg";
import notification from "../assets/Bell.svg";
import messageicon from "../assets/messageIcon.svg";
import ladypic from "../assets/lady.svg";
import "../styles/Navbar.css";
import Offcanvas from "../component/Offcanvas";

const Navbar = () => {
  return (
    <>
      <nav className="d-flex justify-content-between navbar-container container">
        <div className="d-md-none">
          {["start"].map((placement, idx) => (
            <Offcanvas key={idx} placement={placement} name={placement} />
          ))}
        </div>
        <form className="nav-form">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="inputs"
          />
          {/* <img  className = "position-absolute" src= {searchIcon} alt=""/> */}
        </form>
        <div className="d-flex gap-4 align-items-center justify-content-evenly d-none d-md-flex">
          <div>
            <img
              src={notification}
              alt="notification-img"
              className="d-none d-lg-block"
            />
          </div>
          <div>
            <img
              src={messageicon}
              alt="message-img"
              className="d-none d-lg-block"
            />
          </div>
          <div className="d-flex gap-3 align-items-center">
            <img src={ladypic} alt="lady-pic" className="d-none d-md-block " />
          </div>

          {/* drop down */}
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              mickeydan
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <button className="btn btn-danger">
                  <Link to={"/auth/signin"}> Log out </Link>
                </button>
              </Dropdown.Item>{" "}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
