import React, { Component } from "react";
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import styles from "./style.module.css";
import NewToDoForm from "./NewToDoForm";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Walk The Fish" }, { task: "Groom Chickens" }],
    };
    this.create = this.create.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  render() {
    const todos = this.state.todos.map((item, index) => {
      return (
        <div key={index}>
          <button>Edit</button>
          <button>Remove</button>
          <li>{item.task}</li>
        </div>
      );
    });
    return (
      <div className={styles.wrap}>
        <InnerNavBar
          text="back"
          link="https://github.com/DundarKoray/React__Project__GameCollections/tree/master/src/ToDoList"
        />
        <h1>Todo List!</h1>
        <NewToDoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default ToDo;
