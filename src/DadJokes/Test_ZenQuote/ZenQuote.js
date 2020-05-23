// this component is for testing purpose only
// it is not used in the application

import React, { Component } from "react";
import axios from "axios";
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
    
      
      setTimeout(
        function () {
          this.setState({
            quote: "to Smile",
            isLoaded: true
          });
        }.bind(this),
        3000
      );
    
  }

  render() {
    return (
      <div >
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className={styles.loader}/>
        )}
      </div>
    );
  }
}

export default ZenQuote;
