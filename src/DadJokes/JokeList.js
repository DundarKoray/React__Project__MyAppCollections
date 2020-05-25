import React, { Component } from "react";
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import WorkIsInProgress from "../images/workIsInProgress.png";
import Joke from "./Joke";
import axios from "axios";

class JokeList extends Component {
  async componentDidMount() {
    // Load Jokes
    let response = await axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    console.log(response.data.joke);
  }
  render() {
    return (
      <div>
        <InnerNavBar
          text="back"
          link="https://github.com/DundarKoray/React__Project__MyAppCollections/tree/master/src/DadJokes"
        />
        <img style={{ width: "250px" }} src={WorkIsInProgress} />
        <Joke />
      </div>
    );
  }
}

export default JokeList;
