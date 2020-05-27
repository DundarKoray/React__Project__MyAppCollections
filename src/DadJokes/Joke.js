import React, { Component } from "react";
import styles from "./joke.module.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.joke}>
        <div className={styles.jokeButtons}>
          <button onClick={this.props.upVote}><FaArrowUp /></button> <span>{this.props.votes}</span> <button onClick={this.props.downVote}><FaArrowDown /></button>
        </div>
        <div className={styles.jokeText}>
            {this.props.jokeText}
        </div>
      </div>
    );
  }
}

export default Joke;
