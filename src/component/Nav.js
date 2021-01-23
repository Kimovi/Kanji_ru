import React, { Component } from 'react'
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import kanjiruLogo from "./kanjiruLogo.png"

export default class componentName extends Component {
  render() {
    return (
        <Navbar expand="lg" className="navbar" >
          <Navbar.Brand href="/"><img src ={kanjiruLogo} alt ="logo" className = "logo"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" style={{color: "white"}}>Home</Nav.Link>
              <NavDropdown style={{color: "white"}} title="Level" id="basic-nav-dropdown" >
                <NavDropdown.Item href="/beginner">Beginner</NavDropdown.Item>
                <NavDropdown.Item href="/intermediate">Intermediate</NavDropdown.Item>
                <NavDropdown.Item href="/advanced">Advanced</NavDropdown.Item> 
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="/" style={{color: "white"}}>Bookmark</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
