import React, { Component } from "react";
import BoxGenerator from "./BoxGenerator";

class BoxGeneratorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {
          width: 10,
          height: 40,
          color: "orange",
        },
        {
            width: 50,
            height: 10,
            color: "red",
          },
      ],
    };
  }

  render() {
    const boxes = this.state.boxes.map((item) => {
      return (
        <BoxGenerator
          height={item.height}
          width={item.width}
          color={item.color}
        />
      );
    });
    return (
      <div>
        <h1>Color Box Generator</h1>
        {boxes}
      </div>
    );
  }
}

export default BoxGeneratorList;
