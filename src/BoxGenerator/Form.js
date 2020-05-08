import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
      e.preventDefault();
    this.props.createBox(this.state)
    this.setState({
        height: "", width: "", color: ""
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
        <form>
            <div className="center">
          <label>Height:</label>
          <input
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
            id="height"
            style={{padding:".3rem",marginRight:"1rem"}}
          />
          <label>Width:</label>
          <input
            type="text"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
            id="width"
            style={{padding:".3rem", marginRight:"1rem"}}
          />
          <label>Color:</label>
          <input
            type="text"
            name="color"
            value={this.state.color}
            onChange={this.handleChange}
            id="color"
            style={{padding:".3rem",}}
            
          />
        </div>
        <button onClick={this.handleSubmit}  style={{marginTop:"1rem"}} className="btn-primary">Create A New Box</button>
      </form>
    );
  }
}

export default Form;
