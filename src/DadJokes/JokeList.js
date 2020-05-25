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
        <div className={styles.app}>
          <div className={styles.jokeWrap}>
            <div className={styles.sidebar}>
              <h1 className={styles.title}><span className={styles.titleSpan}>Dad</span> Jokes</h1>
              <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"/>
              <button>New Jokes</button>
            </div>
            <div className={styles.jokes}>

            {this.state.jokes.map((j, index) => {
                return <div key={index}>{j}</div>;
            })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JokeList;
