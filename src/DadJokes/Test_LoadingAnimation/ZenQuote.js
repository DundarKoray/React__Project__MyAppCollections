// this component is for testing purpose only
// it is not used in the application

import React, { Component } from "react";
// import axios from "axios";
import styles from "./zenQuote.module.css";

class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      isLoaded: false,
    };
  }
  componentDidMount() {
    //load data
    // set state with that data

    console.log("HELLO FROM COMPONENT DID MOUNT")

    setTimeout(
      function () {
        this.setState({
          quote: "to Smile",
          isLoaded: true,
        });
      }.bind(this),
      3000
    );
  }

  componentDidUpdate() {
    console.log("HELLO FROM COMPONENT DID UPDATE")
  }

  render() {
    console.log("HELLO FROM RENDER")
    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className={styles.loader} />
        )}
      </div>
    );
  }
}

export default ZenQuote;
