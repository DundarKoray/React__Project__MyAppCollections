import React, { Component } from 'react';

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