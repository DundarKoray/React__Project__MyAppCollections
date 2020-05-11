import React from "react";
import SimpleHero from "../SimpleHero/SimpleHero";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";

import "./home.css";
const Home = () => {
  return (
    <SimpleHero>
      <Banner
        title="React Excersices"
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
        </div>
      </Banner>
    </SimpleHero>
  );
};

export default Home;
