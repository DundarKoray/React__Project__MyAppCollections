import React, { Component } from "react";
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import styles from "./style.module.css";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";
import { v4 as uuidv4 } from "uuid";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[
        
        { task: "Eat Well", id: uuidv4() },
        { task: "Work Hard", id: uuidv4() },
        { task: "Sleep Well", id: uuidv4() },
      ],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  remove(id) {
    this.setState({
      // this returns a new array that is not mathcing the id we passed
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        return { ...item, task: updatedTask };
      }

      return item;
    });

    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }

      return item;
    });

    this.setState({ todos: updatedTodos });
  }

  render() {
    const todos = this.state.todos.map((item) => {
      // console.log(this.state);
      return (
        <ToDo
          key={item.id}
          id={item.id}
          task={item.task}
          completed ={item.completed}
          toggleTodo ={this.toggleCompletion}
          removeTodo={this.remove}
          updateTodo={this.update}
        />
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
        <ul className={styles.todos}>{todos}</ul>
      </div>
    );
  }
}

export default ToDoList;
