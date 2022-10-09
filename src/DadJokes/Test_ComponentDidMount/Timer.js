// this component is for testing purpose only
// it is not used in the application

import { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        console.log("HELLO FROM CONSTRUCTOR")
        this.state = {
            visibility: "good"
        }
    }

    componentDidMount(){
        console.log("HELLO FROM COMPONENT DID MOUNT")
        this.setState({
            visibility: "poor"
        })
    }



    render() {
        console.log("HELLO FROM RENDER")
        return (
            <div>
                <h1>TIMER</h1>            
            </div>
        );
    }
}

export default Timer;

/*
    QUESTION: What will print in console, by order?
    
    ANSWER: First Constructor, second render and last componentDidMount, however if state is change in componentDidMount then one more time render.

    "HELLO FROM CONSTRUCTOR"
    "HELLO FROM RENDER"
    "HELLO FROM COMPONENT DID MOUNT"
    "HELLO FROM RENDER"
*/