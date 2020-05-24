import React, { Component } from 'react';
import WorkIsInProgress from '../images/workIsInProgress.png';
import InnerNavBar from '../InnerNavBar/InnerNavBar';

class DrinkingGame extends Component {
    render() {
        return (
            <div>
                <InnerNavBar
          text="back"
          link="https://github.com/DundarKoray/React__Project__MyAppCollections/tree/master/src/DadJokes"
          />
                <img src={WorkIsInProgress} />
            </div>
        );
    }
}

export default DrinkingGame;