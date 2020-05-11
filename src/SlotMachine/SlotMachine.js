import React from "react";

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
      message: ""
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
        <h1>Slot Machine</h1>
        <h2>Do you feel lucky today? Give it a try!</h2>
        <h3>
          <button className="btn-primary" onClick={this.roll}>Press to play</button>
        </h3>
        <p
          className="Slot"
          style={{ fontSize: "80px", backgroundColor: "purple" }}
        >
          <span className="singleSlot">{this.state.s1}</span>
          <span className="singleSlot">{this.state.s2}</span>
          <span className="singleSlot">{this.state.s3}</span>
        </p>
        <p className="winnerMessage">          
        {this.state.message === "You Win!" ? <span className="winner">{this.state.message}</span> :  <span className="loser">{this.state.message}</span> }
        </p>
        <br />
      </div>
    );
  }
}

export default SlotMachine;
