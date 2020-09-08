import React from "react";
import SearchBar from "./SearchBar";
import logo from './../logoHenry.png';
import "./Nav.css";
import  {Nav,Navbar} from "react-bootstrap"

function NavBar({ onSearch }) {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Henry-Weather App
    </Navbar.Brand>
  </Navbar>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
        </Nav>
        <SearchBar onSearch={onSearch}/>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
