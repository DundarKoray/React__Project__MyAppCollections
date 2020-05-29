import React, { Component } from "react";
import styles from "./joke.module.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

class Joke extends Component {
//   getColor() {
//     if (this.props.votes >= 15) {
//       return "#4CAF50";
//     } else if (this.props.votes >= 12) {
//       return "#8BC34A";
//     } else if (this.props.votes >= 9) {
//       return "#CDDC39";
//     } else if (this.props.votes >= 6) {
//       return "#FFEB3B";
//     } else if (this.props.votes >= 3) {
//       return "#FFC107";
//     } else if (this.props.votes >= 0) {
//       return "#FF9800";
//     } else {
//       return "#f44336";
//     }
//   }

  // this code simply does the same above but dynamically
  getRGB(rating) {
    if (rating > 0) return `${200 - rating * 20},200,0`;
    return `200,${200 - rating * -20},0`;
  }

  getEmoji() {
    if (this.props.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (this.props.votes >= 12) {
      return "em em-laughing";
    } else if (this.props.votes >= 9) {
      return "em em-smiley";
    } else if (this.props.votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (this.props.votes >= 3) {
      return "em em-neutral_face";
    } else if (this.props.votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }

  render() {
    return (
      <div className={styles.joke}>
        <div className={styles.jokeButtons}>
          <button className={styles.btnVoteUp} onClick={this.props.upVote}>
            <FaArrowUp />
          </button>
          <span className={styles.jokeVote} style={{border: `3px solid rgb(${this.getRGB(this.props.votes)})`}}>{this.props.votes}</span>
          <button className={styles.btnVoteDown} onClick={this.props.downVote}>
            <FaArrowDown />
          </button>
        </div>
        <div className={styles.jokeText}>{this.props.jokeText}</div>
        <div className={styles.jokeSmiley}>
          <i
            className={this.getEmoji()}
            ariarole="presentation"
            arialabel="ROLLING ON THE FLOOR LAUGHING"
          ></i>
        </div>
      </div>
    );
  }
}

export default Joke;
