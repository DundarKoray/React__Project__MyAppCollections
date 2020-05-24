import React, { Component } from "react";
import axios from "axios";
import WorkIsInProgress from "../images/workIsInProgress.png";
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import Card from "./Card";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      drawnCards: [],
    };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
    // console.log(deck)
    // console.log(deck.data)

    this.setState({ deck: deck.data });
  }

  async getCard() {
    // make request using deck id
    let id = this.state.deck.deck_id;
    // console.log(id)

    // we gotta use try catch because when running out of deck it gives error
    try {
      let cardUrl = `${API_BASE_URL}/${id}/draw`;
      let cardRes = await axios.get(cardUrl);
      // console.log(cardRes.data)
      if (!cardRes.data.success) {
        throw new Error("No Cards Left!");
      }

      // set state using new card info from api
      let card = cardRes.data.cards[0];
      this.setState((oldState) => ({
        drawnCards: [
          ...oldState.drawnCards,
          {
            id: card.code,
            image: card.image,
            name: `${card.suit} of ${card.value}`,
          },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const cards = this.state.drawnCards.map(item => {
        return <Card name={item.name} image={item.image} key={item.id} />
    })
    return (
      <div>
        <InnerNavBar
          text="back"
          link="https://github.com/DundarKoray/React__Project__MyAppCollections/tree/master/src/DadJokes"
        />
        <img src={WorkIsInProgress} />
        <h1>Drinking Game</h1>
        <button onClick={this.getCard} className="btn-primary">
          Get Card
        </button>
        {cards}
      </div>
    );
  }
}

export default Deck;
