import { Component } from "react";
import InnerNavBar from "../InnerNavBar/InnerNavBar";
// import WorkIsInProgress from "../images/workIsInProgress.png";
import Joke from "./Joke";
import axios from "axios";
import styles from "./joke.module.css";
import { v4 as uuidv4 } from "uuid";
import { FaLaugh } from "react-icons/fa";
import {Animated} from "react-animated-css";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false,
    };

    this.handleVote = this.handleVote.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.seenJokes = new Set(this.state.jokes.map((j) => j.text));
    console.log(this.seenJokes);
  }

  async componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }
  async getJokes() {
    try {
      // Load Jokes and store 10 of them
      let jokes = [];
      while (jokes.length < this.props.numJokesToGet) {
        let response = await axios.get("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" },
        });

        // console.log(response.data.joke);
        if (!this.seenJokes.has(response.data.joke)) {
          jokes.push({ text: response.data.joke, votes: 0, id: uuidv4() });
        } else {
          console.log("Found a duplicate");
          console.log(response.data.joke);
        }
      }
      // console.log(jokes)
      this.setState(
        (st) => ({ jokes: [...st.jokes, ...jokes], loading: false }),
        () =>
          window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
      );
    } catch (e) {
      alert("Sorry, server maintanence, cannot download new jokes at the moment. Please try again later.");
      this.setState({ loading: false });
    }
    // console.log(this.state.jokes);
  }

  handleVote(id, change) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((j) =>
          j.id === id ? { ...j, votes: j.votes + change } : j
        ),
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }

  render() {
    let jokesSorted = this.state.jokes.sort((a,b) => b.votes - a.votes)
    return (
      <div>
        <InnerNavBar
          text="back"
          link="https://github.com/DundarKoray/React__Project__MyAppCollections/tree/master/src/DadJokes"
        />
        {/* <img style={{ width: "250px" }} src={WorkIsInProgress} /> */}
        <div className={styles.app}>
          <div className={styles.jokeWrap}>
            <div className={styles.sidebar}>
              <h1 className={styles.title}>
                <span className={styles.titleSpan}>Dad</span> Jokes
              </h1>
              
              
              <Animated animationIn="shake" animationOut="shake" animationInDuration={5000} animationOutDuration={5000} isVisible={true}>
              <img alt="shake icon" src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
</Animated>
              <button className={styles.getMoreButton} onClick={this.handleClick}>New Jokes</button>
            </div>
            <div
              style={
                this.state.loading
                  ? {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }
                  : null
              }
              className={styles.jokes}
            >
              {this.state.loading ? (
                <div className={styles.loader}>
                  <div className={styles.spinnerWrapper}>
                    <FaLaugh size="100" className={styles.spinner} />
                    <p>LOADING...</p>
                  </div>
                </div>
              ) : (
                jokesSorted.map((j) => {
                  return (
                    <Joke
                      jokeText={j.text}
                      votes={j.votes}
                      key={j.id}
                      upVote={() => this.handleVote(j.id, 1)}
                      downVote={() => this.handleVote(j.id, -1)}
                    />
                  );
                })
              )}
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default JokeList;
