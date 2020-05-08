import React, { Component } from "react";
import BoxGenerator from "./BoxGenerator";
import Form from "./Form";

class BoxGeneratorList extends Component {
  constructor(props) {
    super(props);
    this.state = {boxes: [{width: 10, height: 40, color: "orange"}],};
    this.create = this.create.bind(this);
  }

  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  }

  render() {
    const boxes = this.state.boxes.map((item, index) => {
      return (
        <BoxGenerator
          height={item.height}
          width={item.width}
          color={item.color}
          key={index}
        />
      );
    });
    return (
      <div>
        <h1>Color Box Generator</h1>
        <p>Insert values to create boxes</p>
        <Form createBox={this.create}/>
        {boxes}
      </div>
    );
  }
}

export default BoxGeneratorList;
