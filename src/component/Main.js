import React, { Component } from 'react'
import {Route, Switch} from "react-router"

export default class componentName extends Component {
  render() {
    return (
        <div>
          <h1>Let's learn JPLT level 2 words with us</h1>
          <button type="button" className="btn btn-primary">Beginner</button>
          <button type="button" className="btn btn-primary">Intermidiate</button>
          <button type="button" className="btn btn-primary">Advanced</button> 
        </div>
    )
  }
}
