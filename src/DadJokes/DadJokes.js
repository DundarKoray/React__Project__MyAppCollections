import React, { Component } from 'react';
import InnerNavBar from '../InnerNavBar/InnerNavBar';

class DadJokes extends Component {
    render() {
        return (
            <div>
                <InnerNavBar
          text="back"
          link="https://github.com/DundarKoray/React__Project__MyAppCollections/tree/master/src/DadJokes"
          />
                Hello from DadJokes
            </div>
        );
    }
}

export default DadJokes;