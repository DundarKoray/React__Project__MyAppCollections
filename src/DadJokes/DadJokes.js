import React, { Component } from 'react';
import InnerNavBar from '../InnerNavBar/InnerNavBar';
import ZenQuote from './ZenQuote';

class DadJokes extends Component {
    render() {
        return (
            <div>
                <InnerNavBar
          text="back"
          link="https://github.com/DundarKoray/React__Project__MyAppCollections/tree/master/src/DadJokes"
          />
                <ZenQuote />
            </div>
        );
    }
}

export default DadJokes;