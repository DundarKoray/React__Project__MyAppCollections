import React, { Component } from "react";
import Coin from "./Coin";
import { choice } from "./helpers";
import headsPic from "./heads.png";
import tailsPic from "./tails.png";
import ButtonReturn from "../ButtonReturn/ButtonReturn";
class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: headsPic },
      { side: "tails", imgSrc: tailsPic },
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      currCoin: { side: "heads", imgSrc: headsPic },
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    //choice is a function that takes an array as parameter and returns a random index item  eg. fruits[randomIndex]. This is the function that randomly picks if the coin's side is heads or tails.
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div>
          {console.log(this.state.currCoin)}
          <ButtonReturn text="Back"/>
        <h2>Let's Flip A Coin!</h2>
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
          heads and {this.state.nTails} tails.
        </p>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button
          style={{ outline: "none" }}
          className="btn-primary"
          onClick={this.handleClick}
        >
          Flip Me!
        </button>
        <br />
        <br />
        <br />
        
      </div>
    );
  }
}

export default CoinContainer;
