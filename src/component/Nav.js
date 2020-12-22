import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{color: "red"}}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Hidden brand</a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <p class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </p>
            <p class="nav-item">
              <a class="nav-link" href="#">bookmark</a>
            </p>
          </ul>
        </div>
        </nav>
    )
  }
}
