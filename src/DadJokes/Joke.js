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
          <button className={styles.btnVote} onClick={this.props.upVote}>
            <FaArrowUp />
          </button>
          <span className={styles.jokeVote}>{this.props.votes}</span>
          <button className={styles.btnVote} onClick={this.props.downVote}>
            <FaArrowDown />
          </button>
        </div>
        <div className={styles.jokeText}>{this.props.jokeText}</div>
        <div className={styles.jokeSmiley}>
        <i class="em em-rolling_on_the_floor_laughing" aria-role="presentation" aria-label="ROLLING ON THE FLOOR LAUGHING"></i>
        </div>
      </div>
    );
  }
}

export default Joke;
