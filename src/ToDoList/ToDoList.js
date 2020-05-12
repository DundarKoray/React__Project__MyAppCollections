import React, { Component } from "react";
import ToDo from './ToDo';
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import styles from './style.module.css'

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
      <div className={styles.wrap}>
          <InnerNavBar text="back" link="https://github.com/DundarKoray/React__Project__GameCollections/tree/master/src/ToDoList"/>
        <h1>Todo List!</h1>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
