import React, { Component } from "react";
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import WorkIsInProgress from "../images/workIsInProgress.png";
import Joke from "./Joke";
import axios from "axios";
import styles from "./joke.module.css";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
  }

  async componentDidMount() {
    // Load Jokes and store 10 of them
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });

      // console.log(response.data.joke);
      jokes.push(response.data.joke);
    }
    // console.log(jokes)
    this.setState({
      jokes: jokes,
    });

    console.log(this.state.jokes);
  }
  render() {
    return (
      <div>
        <InnerNavBar
          text="back"
          link="https://github.com/DundarKoray/React__Project__MyAppCollections/tree/master/src/DadJokes"
        />
        <img style={{ width: "250px" }} src={WorkIsInProgress} />
        <div className={styles.jokeWrap}>
          <h1>Dad Jokes</h1>
          <div className={styles.joke}></div>
          {this.state.jokes.map((j) => {
            return <div>{j}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default JokeList;
