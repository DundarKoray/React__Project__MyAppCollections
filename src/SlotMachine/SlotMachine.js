import React from "react";
import "./slotMachine.css";
import InnerNavBar from "../InnerNavBar/InnerNavBar";

class SlotMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slotRandom1: Math.floor(Math.random() * 3),
      slotRandom2: Math.floor(Math.random() * 3),
      slotRandom3: Math.floor(Math.random() * 3),
      s1: "🍊",
      s2: "🍒",
      s3: "🍇",
      message: "Good Luck!"
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    this.setState({
      slotRandom1: Math.floor(Math.random() * 3),
      slotRandom2: Math.floor(Math.random() * 3),
      slotRandom3: Math.floor(Math.random() * 3)
    });
    if (this.state.slotRandom1 === 0) {
      this.setState({ s1: "🍊" });
    } else if (this.state.slotRandom1 === 1) {
      this.setState({ s1: "🍒" });
    } else {
      this.setState({ s1: "🍇" });
    }

    if (this.state.slotRandom2 === 0) {
      this.setState({ s2: "🍊" });
    } else if (this.state.slotRandom2 === 1) {
      this.setState({ s2: "🍒" });
    } else {
      this.setState({ s2: "🍇" });
    }

    if (this.state.slotRandom3 === 0) {
      this.setState({ s3: "🍊" });
    } else if (this.state.slotRandom3 === 1) {
      this.setState({ s3: "🍒" });
    } else {
      this.setState({ s3: "🍇" });
    }

    const isWinner =
      this.state.slotRandom1 === this.state.slotRandom2 && this.state.slotRandom2 === this.state.slotRandom3;

    if (isWinner) {
        this.setState({
            message: "You Win!"
        })
    } else {
        this.setState({
            message: "You Lose!"
        })
    }
  }
  render() {
    

    return (
      <div className="Machine">
         <InnerNavBar text="back" link="https://github.com/DundarKoray/React__Project__GameCollections/tree/master/src/SlotMachine" />
        <h1>Slot Machine</h1>
        <p>Do you feel lucky today? Give it a try!</p>
        
        <p
          className="Slot"
        >
          <span className="singleSlot">{this.state.s1}</span>
          <span className="singleSlot">{this.state.s2}</span>
          <span className="singleSlot">{this.state.s3}</span>
        </p>
        <button className="btn-primary" onClick={this.roll}>Press to play</button>
        <p className="result">        
        {this.state.message === "You Win!" ? <span className="winner">{this.state.message}</span> :  <span className="loser">{this.state.message}</span> }
        </p>
      </div>
    );
  }
}

export default SlotMachine;
