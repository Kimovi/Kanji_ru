import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <p className="loader">
        Loading...
        <span>🕑🕒🕙🕚</span>
        <br/>少々お待ち下さい。
      </p>
    );
  }
}

export default Loader;