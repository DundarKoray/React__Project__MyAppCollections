import { Component } from "react";
import axios from "axios";
// import WorkIsInProgress from "../images/workIsInProgress.png";
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import Card from "./Card";
import styles from "./card.module.css";

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
        throw new Error("No Cards Left! Refresh the page to play again!");
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
    const cards = this.state.drawnCards.map((item) => {
      return <Card name={item.name} image={item.image} key={item.id} />;
    });
    return (
      <div>
        <InnerNavBar
          text="back"
          link="https://github.com/DundarKoray/React__Project__MyAppCollections/tree/master/src/DrinkingGame"
        />
        <div className={styles.deckWrapper}>
          {/* <img src={WorkIsInProgress} /> */}
          <h1>🍻 Drinking Game 🍻</h1>
          <h2>◆ Play Responsibly!◆ </h2>
          <div className={styles.cardWrapper}>{cards}</div>
          <div
            style={{
              margin: "auto",
              width: "250px",
              height: "300px",
              border: "1px solid green",
            }}
          ></div>
          <button onClick={this.getCard} className={styles.deckButton}>
            Get Card
          </button>
          <div className={styles.rules}>
            <h2>Rules</h2>
            <ul
              style={{
                padding: "1rem",
                width: "90%",
                textAlign: "left",
                margin: "auto",
                listStyle: "none",
              }}
            >
              <li>
                A: Waterfall - Every player begins drinking, and no one can stop
                until the player before them does{" "}
              </li>
              <li>
                2: The person who picks the card picks someone else to drink.{" "}
              </li>
              <li>3: The person who picks the card drinks. </li>
              <li>
                4: Everyone races to touch their nose, last person to do so
                drinks
              </li>
              <li>
                5: Everyone races to tell their names, last person to do so
                drinks
              </li>
              <li>6: Everybody drinks</li>
              <li>7: Pick a person to drink with</li>
              <li>
                8: Rhyme - Say a phrase, and everyone else must say phrases that
                rhyme
              </li>
              <li>9: Whoever drew the card can pick two person to drink </li>
              <li>
                10: Categories - Pick a category, and say something from that
                category (i.e. if "drinking games" was the category, "kings"
                would be a viable answer.{" "}
              </li>
              <li>J: The person to your right has to drink. </li>
              <li>
                Q: There should be an empty glass, everyone who picks queen
                should pour their drink in the empty glass, fill the quarter. 4
                mix drinks
              </li>
              <li>
                K: Ruler - Make a rule that everyone must follow until the next
                King is drawn (i.e. force everyone to drink after each turn){" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Deck;
