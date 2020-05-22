import React, { Component } from 'react';
import InnerNavBar from '../InnerNavBar/InnerNavBar';

class DadJokes extends Component {
    render() {
        return (
            <div>
                <InnerNavBar
          text="back"
          link="https://github.com/DundarKoray/React__Project__GameCollections/tree/master/src/ToDoList"
          />
                Hello from DadJokes
            </div>
        );
    }
}

export default DadJokes;