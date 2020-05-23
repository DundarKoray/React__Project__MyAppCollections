// this component is for testing purpose only
// it is not used in the application

import React, { Component } from 'react';
import axios from 'axios';


class ZenQuote extends Component {
    constructor(props){
        super(props)
        this.state = {
            quote: ""
        }
    }
    componentDidMount() {
        //load data
        // set state with that data
        axios.get("https://api.github.com/zen").then(response => {
            console.log(response)
            this.setState({
                quote: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Always remember...</h1>
                <p>{this.state.quote}</p>
            </div>
        );
    }
}

export default ZenQuote;