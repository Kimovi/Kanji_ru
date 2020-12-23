import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom"

export default class componentName extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Let's learn JPLT level 2 words with us</h1>
          <Link to ="/beginner" >
          <button type="button" className="btn btn-primary">Beginner</button>
          </Link>
          <Link to ="/intermediate">
          <button type="button" className="btn btn-primary">Intermidiate</button>
          </Link>
          <Link to="/advanced">
          <button type="button" className="btn btn-primary">Advanced</button> 
          </Link>
        </div>
      </Router>
    )
  }
}
