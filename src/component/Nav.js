import React, { Component } from 'react'
import NavDropdown from "react-bootstrap/NavDropdown"

export default class componentName extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">Kanji Suru</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
              <NavDropdown title="Kanji Level" id="basic-nav-dropdown">
                <NavDropdown.Item href="/beginner">Beginner</NavDropdown.Item>
                <NavDropdown.Item href="/intermediate">Intermediate</NavDropdown.Item>
                <NavDropdown.Item href="/advanced">Advanced</NavDropdown.Item>
              </NavDropdown>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Bookmark</a>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
}
