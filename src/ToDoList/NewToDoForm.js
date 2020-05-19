import React, { Component } from 'react';

class NewToDoForm extends Component {
    constructor(props){
        super(props);
        this.state = {task: ""};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo(this.state)
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
                <label htmlFor='task'>New Todo</label>
                {/* name has to match with state, thats why they re both called task */}
                <input type='text' placeholder='New Todo' name='task' id='task' value={this.state.task} onChange={this.handleChange} />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default NewToDoForm;