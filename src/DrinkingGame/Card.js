import React, { Component } from "react";
import styles from "./card.module.css";

class Card extends Component {
  constructor(props) {
    super(props);
    // transform: translate(10px, 20px) rotate(20deg);
    // -45 and -20 is to narrow the angles
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 30;
    let yPos = Math.random() * 40 - 30;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }
  render() {
    return (
      <img
        style={{ transform: this._transform }}
        className={styles.card}
        src={this.props.image}
        alt={this.props.name}
      />
    );
  }
}

export default Card;
