import React, { Component } from "react";

import Box from "./Box";
import "./BoxContainer.css";

import ButtonReturn from "../ButtonReturn/ButtonReturn";
class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 9,
    allColors: [
      "purple",
      "magenta",
      "violet",
      "pink",
      "yellow",
      "green",
      "red",
      "blue",
      "black",
      "orange",
    ],
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return (
      <div>
        <ButtonReturn text="Back" />
        <h2>Color Boxes</h2>
        <p>Click one of the boxes to change color</p>
        <div className="BoxContainer">{boxes}</div>
      </div>
    );
  }
}

export default BoxContainer;
