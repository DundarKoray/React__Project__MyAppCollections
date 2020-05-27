import React, { Component } from "react";
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import WorkIsInProgress from "../images/workIsInProgress.png";
import Joke from "./Joke";
import axios from "axios";
import styles from "./joke.module.css";
import { v4 as uuidv4 } from "uuid";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };

    this.handleVote = this.handleVote.bind(this);
  }

  async componentDidMount() {
    // Load Jokes and store 10 of them
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });

      // console.log(response.data.joke);
      jokes.push({ text: response.data.joke, votes: 0, id: uuidv4() });
    }
    // console.log(jokes)
    this.setState({
      jokes: jokes,
    });

    // console.log(this.state.jokes);
  }
  handleVote(id, change) {
   this.setState(st => ({
     jokes: st.jokes.map(j =>
        j.id === id ? {...j, votes: j.votes + change } : j
      )
   }))
  }

  render() {
    return (
      <div>
        <InnerNavBar
          text="back"
          link="https://github.com/DundarKoray/React__Project__MyAppCollections/tree/master/src/DadJokes"
        />
        <img style={{ width: "250px" }} src={WorkIsInProgress} />
        <div className={styles.app}>
          <div className={styles.jokeWrap}>
            <div className={styles.sidebar}>
              <h1 className={styles.title}>
                <span className={styles.titleSpan}>Dad</span> Jokes
              </h1>
              <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
              <button>New Jokes</button>
            </div>
            <div className={styles.jokes}>
              {this.state.jokes.map((j) => {
                return (
                  <Joke
                    jokeText={j.text}
                    votes={j.votes}
                    key={j.id}
                    upVote={() => this.handleVote(j.id, 1)}
                    downVote={() => this.handleVote(j.id, -1)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JokeList;
