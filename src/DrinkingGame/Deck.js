import React, { Component } from 'react';
import WorkIsInProgress from '../images/workIsInProgress.png';
import InnerNavBar from '../InnerNavBar/InnerNavBar';
import axios from "axios";

const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle"

class Deck extends Component {
    constructor(props){
        super(props);
        this.state = {
            deck: null,
            drawnCards: [] 
        }

    }

    async componentDidMount() {
        let deck = await axios.get(API_URL);
        // console.log(deck)
        
        this.setState({deck: deck.data})
    }

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

export default Deck;