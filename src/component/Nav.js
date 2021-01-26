import React, { Component } from 'react'
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import kanjiruLogo from "./kanjiruLogo.png"
import {Link} from "react-router-dom"

export default class componentName extends Component {
  render() {
    return (
        <Navbar expand="lg" className="navbar" >
          <Navbar.Brand href="/"><img src ={kanjiruLogo} alt ="logo" className = "logo"></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as ={Link} to="/" style={{color: "white"}}>Home</Nav.Link>
              <NavDropdown style={{color: "white"}} title="Level" id="basic-nav-dropdown" >
                <NavDropdown.Item><Link  to ="/beginner" >Beginner</Link></NavDropdown.Item>
                <NavDropdown.Item><Link  to ="/intermediate" >Intermediate</Link></NavDropdown.Item>
                <NavDropdown.Item><Link  to ="/advanced" >Advanced</Link></NavDropdown.Item> 
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link style={{color: "white"}}><Link  to ="/" >Bookmark</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
