import React, { Component } from "react";
import BoxGenerator from "./BoxGenerator";
import Form from "./Form";
import { FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom';


class BoxGeneratorList extends Component {
  constructor(props) {
    super(props);
    this.state = {boxes: [],};
    this.create = this.create.bind(this);
  }

  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  }

  remove(id) {
    this.setState({
        // it makes a new array without the id that is passed as parameter
        boxes: this.state.boxes.filter(item => item.id !== id)
    })
  }

  render() {
    const boxes = this.state.boxes.map((item, index) => {
      return (
        
        <BoxGenerator
          height={item.height}
          width={item.width}
          color={item.color}
          key={item.id}
          id={item.id}
          removeBox={() => this.remove(item.id)}
        />
      );
    });
    return (
      <div>
        
        <Link to="/" style={{marginBottom: "3rem"}}className="btn-white"><FaArrowLeft /> Back</Link>
        <h1>Color Box Generator</h1>
        <p>Insert values to create boxes</p>
        <Form createBox={this.create}/>
        {boxes}
      </div>
    );
  }
}

export default BoxGeneratorList;
