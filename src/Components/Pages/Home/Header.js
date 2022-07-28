import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.png";
import Styles from "../../Styles/Header.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { NavDropdown } from "react-bootstrap";
import Login from "../../Register/Login";

const Header = () => {

  const [showLogin, setShowLogin] = useState(false);
  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);


  return (
    <div>
      <Navbar bg="white" className="mx-2" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              width="165"
              height="24"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex mainInput justify-content-center align-items-center  mx-auto">
              <AiOutlineSearch className={Styles.searchBtn} />
              <input
                type="search"
                placeholder="Search for your favorite groups in ATG"
                aria-label="Search"
                className={Styles.my_control}
              />
            </Form>

            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavDropdown title='Create Account, It’s free!' id="basic-nav-dropdown">
                <NavDropdown.Item  onClick={handleShow} >Login</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Signup</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login show={showLogin} handleClose={handleClose} />
    </div>
  );
};

export default Header;
