import React, { Component } from "react";
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import styles from "./style.module.css";
import NewToDoForm from "./NewToDoForm";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.create = this.create.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  remove(id) {
    this.setState({
      // this returns a new array that is not mathcing the id we passed
      todos: this.state.todos.filter( t => t.id !== id)
    })
  }

  render() {
    const todos = this.state.todos.map(item => {
      console.log(this.state)
      return (
        <div key={item.id}>
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
