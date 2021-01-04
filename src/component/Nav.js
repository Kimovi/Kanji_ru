import React, { Component } from 'react'
import NavDropdown from "react-bootstrap/NavDropdown"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default class componentName extends Component {
  render() {
    return (
        // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        //   <a className="navbar-brand" href="/">Kanji-ru<br></br>漢字る</a>
        //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        //     <span className="navbar-toggler-icon"></span>
        //   </button>
        //   <div className="collapse navbar-collapse" id="navbarColor01">
        //     <ul className="navbar-nav mr-auto">
        //       <li className="nav-item active">
        //         <a className="nav-link" href="/">Home
        //           <span className="sr-only">(current)</span>
        //         </a>
        //       </li>
        //       <li className="nav-item">
        //       <NavDropdown title="Kanji Level" id="basic-nav-dropdown">
        //         <NavDropdown.Item href="/beginner">Beginner</NavDropdown.Item>
        //         <NavDropdown.Item href="/intermediate">Intermediate</NavDropdown.Item>
        //         <NavDropdown.Item href="/advanced">Advanced</NavDropdown.Item>
        //       </NavDropdown>
        //       </li>
        //       <li className="nav-item">
        //         <a className="nav-link" href="/">Bookmark</a>
        //       </li>
        //     </ul>
        //   </div>
        // </nav>

        <Navbar expand="lg" className="navbar" >
          <Navbar.Brand href="/" style={{color: "white"}}>Kanji-ru<br></br>漢字る</Navbar.Brand>
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
