import React, { Component } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import styles from "./style.module.css";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate =this.handleUpdate.bind(this);
  }

  handleRemove() {
    this.props.remove(this.props.id);
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  handleUpdate(e) {
    e.preventDefault();
    // take new task data and pass up to parent
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({ isEditing: false })
  }

  handleChange(e) {
      this.setState({
          [e.target.name] : e.target.value
      })
  }

  render() {
    let result;
    this.state.isEditing
      ? (result = (
          <div>
            <form onSubmit={this.handleUpdate}>
              <input type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
              <button onClick={this.handleUpdate}> Save </button>
            </form>
          </div>
        ))
      : (result = (
          <div className={styles.editRemove}>
            <button className={styles.btnEdit} onClick={this.toggleForm}>
              <FaEdit /> Edit
            </button>
            <button className={styles.btnDelete} onClick={this.handleRemove}>
              <FaTrashAlt /> Delete
            </button>
            <li>{this.props.task}</li>
          </div>
        ));

    return result;
  }
}

export default ToDo;
