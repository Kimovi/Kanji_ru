import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom"

export default class componentName extends Component {
  render() {
    return (
      <Router>
        <div className="main-page">
          <h1>Let's learn Japanese Kanji with us!Japanese Kanji with us!</h1>
          <p>Our Let's-learn-Japanese app has evolved!
              We have shined our IT skills and adopted API with React to build up this app. 
              Just discover, learn and so on</p>
          <p>
          Onyomi (音読み) and Kunyomi（訓読み) are ways to pronounce Kanji in Japanese. 
          </p>
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
