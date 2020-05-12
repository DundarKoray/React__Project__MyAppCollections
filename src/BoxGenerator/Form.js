import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid"
import styles from './style.module.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.createBox(newBox);
    this.setState({
      height: "",
      width: "",
      color: "",
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <form>
        <div className={styles.formWrapper}>
          

          <label>Height</label>
          <input
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
            id="height"
            style={{  padding: ".3rem", marginBottom: "1rem" }}
            />
          <label>Width</label>
          <input
            type="text"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
            id="width"
            style={{  padding: ".3rem", marginBottom: "1rem" }}
            />
          <label>Color</label>
          <input
            type="text"
            name="color"
            value={this.state.color}
            onChange={this.handleChange}
            id="color"
            style={{  padding: ".3rem",marginBottom: "1rem" }}
            />
        
        </div>
        <button
          onClick={this.handleSubmit}
          style={{ margin: "1rem",  }}
          className="btn-primary"
        >
          Create A New Box
        </button>
      </form>
    );
  }
}

export default Form;
