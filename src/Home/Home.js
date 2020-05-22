import React from "react";
import SimpleHero from "../SimpleHero/SimpleHero";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";

import "./home.css";
const Home = () => {
  return (
    <SimpleHero>
      <Banner
        title="React App Collections"
        info="Welcome to my coding playground! Here are few small fun React apps."
      >
        <div className="home-center">
          <Link
            style={{ margin: "10px", width: "250px" }}
            className="btn-primary"
            to="/flipCoin"
          >
            Flip A Coin
          </Link>
          <Link
            style={{ margin: "10px", width: "250px" }}
            className="btn-primary"
            to="/hangMan"
          >
            Hang Man
          </Link>
          <Link
            style={{ margin: "10px", width: "250px" }}
            className="btn-primary"
            to="/colorBoxes"
          >
            Color Boxes
          </Link>
          <Link
            style={{ margin: "10px", width: "250px" }}
            className="btn-primary"
            to="/boxGenerator"
          >
            Box Generator
          </Link>
          <Link
            style={{ margin: "10px", width: "250px" }}
            className="btn-primary"
            to="/slotMachine"
          >
            Slot Machine
          </Link>
          <Link
            style={{ margin: "10px", width: "250px" }}
            className="btn-primary"
            to="/toDoList"
          >
            ToDo List
          </Link>
          <Link
            style={{ margin: "10px", width: "250px" }}
            className="btn-primary"
            to="/flipCoinV2"
          >
            FlipCoin V2
          </Link>
          {/* <Link
            style={{ margin: "10px", width: "250px" }}
            className="btn-primary"
            to="/whatToEat"
          >
            What to Eat
          </Link> */}
          <Link
            style={{ margin: "10px", width: "250px" }}
            className="btn-primary"
            to="/whatToEatV2"
          >
            What to Eat V2
          </Link>
          <Link
            style={{ margin: "10px", width: "250px" }}
            className="btn-primary"
            to="/dadJokes"
          >
            Dad Jokes
          </Link>
        </div>
      </Banner>
    </SimpleHero>
  );
};

export default Home;
