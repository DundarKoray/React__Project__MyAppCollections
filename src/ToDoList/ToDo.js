import { Component } from "react";
import { FaTrashAlt, FaEdit, FaSave } from "react-icons/fa";
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
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this); 
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
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

  handleToggle(e) {
      this.props.toggleTodo(this.props.id)
  }

  render() {
    let result;
    this.state.isEditing
      ? (result = (
          <div className={styles.modify}>
            <form style={{display:"flex", width:"70%"}} onSubmit={this.handleUpdate}>
              <input className={styles.notCompleted2} type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
              <button className={styles.buttonSave} onClick={this.handleUpdate}> <FaSave /> </button>
            </form>
          </div>
        ))
      : (result = (
          <div className={this.props.completed ? styles.editRemove1 : styles.editRemove2}>
            <li className={this.props.completed ? styles.completed : styles.notCompleted} onClick={this.handleToggle}>{this.props.task}</li>
            <div className={styles.buttons}>

            <button className={styles.btnEdit} onClick={this.toggleForm}>
              <FaEdit /> 
            </button>
            <button className={styles.btnDelete} onClick={this.handleRemove}>
              <FaTrashAlt /> 
            </button>
            </div>
          </div>
        ));

    return result;
  }
}

export default ToDo;
