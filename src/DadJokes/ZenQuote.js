// this component is for testing purpose only
// it is not used in the application

import React, { Component } from 'react';
import axios from 'axios';


class ZenQuote extends Component {
    componentDidMount() {
        //load data
        // set state with that data
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