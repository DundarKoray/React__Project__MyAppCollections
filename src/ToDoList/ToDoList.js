import React, { Component } from "react";
import ToDo from './ToDo';
import { FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Walk The Fish" }, { task: "Groom Chickens" }],
    };
  }
  render() {
      const todos = this.state.todos.map(item => {
          return <ToDo task={item.task} />
      })
    return (
      <div>
          <Link to="/" style={{marginBottom: "3rem"}}className="btn-white"><FaArrowLeft /> Back</Link>
        <h1>Todo List!</h1>
        <ul>
          <li>Todo 1</li>
          <li>Todo 2</li>
        </ul>
      </div>
    );
  }
}

export default ToDoList;
