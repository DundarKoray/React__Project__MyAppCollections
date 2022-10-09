import { Component } from 'react';
import { v4 as uuidv4 } from "uuid"
import styles from "./style.module.css";


class NewToDoForm extends Component {
    constructor(props){
        super(props);
        this.state = {task: ""};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo({...this.state, id: uuidv4(), completed: false});
        this.setState({ task: "" });
    }

    handleChange(e) {
        // console.log(e.target)
        // console.log(e.target.name)
        // console.log(this.state)
        
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <label htmlFor='task'>New Todo</label> */}
                {/* name has to match with state, thats why they re both called task */}
                <div style={{display:"flex"}}>

                <input style={{flex:"1",fontSize:"1rem",padding:".2rem",marginRight: '.2rem'}}type='text' placeholder='New Todo' name='task' id='task' value={this.state.task} onChange={this.handleChange} />
                
                <button className={styles.buttonAdd}>Add</button>
                </div>
            </form>
        );
    }
}

export default NewToDoForm;