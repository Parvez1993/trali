import React from "react";
import { Dropdown, Nav, Navbar } from "rsuite";
import "../styles/Menubar.css";
import logo from "../assets/logo.png";
import { BiUserCircle, BiHeart, BiCartAlt } from "react-icons/bi";
import { GiScales } from "react-icons/gi";

function Menubar() {
  return (
    <Navbar className="container menu">
      <Navbar.Brand href="#">
        <img src={logo} alt="logo" className="logo" />
      </Navbar.Brand>
      <Nav className="menu-items">
        <Nav.Item>Home</Nav.Item>
        <Nav.Item>Pages</Nav.Item>
        <Nav.Item>Blog</Nav.Item>
        <Nav.Item>Contacts</Nav.Item>
      </Nav>
      <Nav pullRight>
        <div className="nav_icon">
          <BiUserCircle className="icon" />
          <BiHeart className="icon" />
          <GiScales className="icon" />

          <span className="cart">
            <BiCartAlt className="icon" />
            <span className="round">15</span>
          </span>
        </div>
      </Nav>
    </Navbar>
  );
}

export default Menubar;
