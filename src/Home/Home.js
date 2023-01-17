
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
          <Link className="btn-primary" to="/flipCoin">
            Flip A Coin
          </Link>
          <Link className="btn-primary" to="/hangMan">
            Hang Man
          </Link>
          <Link className="btn-primary" to="/colorBoxes">
            Color Boxes
          </Link>
          <Link className="btn-primary" to="/boxGenerator">
            Box Generator
          </Link>
          <Link className="btn-primary" to="/slotMachine">
            Slot Machine
          </Link>
          <Link className="btn-primary" to="/toDoList">
            ToDo List
          </Link>
          <Link className="btn-primary" to="/flipCoinV2">
            FlipCoin V2
          </Link>
          
          <Link className="btn-primary" to="/whatToEatV2">
            What to Eat V2
          </Link>
          <Link className="btn-primary" to="/dadJokes">
            Dad Jokes
          </Link>
          <Link className="btn-primary" to="/drinkingGame">
            Drinking Game
          </Link>
          <Link className="btn-primary" to="/tours">
            Tours
          </Link>
          <Link className="btn-primary" to="/employees">
            Employees
          </Link>
          <Link className="btn-primary" to="/frequentlyAskedQuestions">
            Accordions: FAQ
          </Link>
          <Link className="btn-primary" to="/foodMenu">
            Food Menu
          </Link>
          <Link className="btn-primary" to="/tabsJobExperiences">
            Tabs: Job Experiences
          </Link>
          <Link className="btn-primary" to="/tabsJobExperiences">
            Slider: Reviews
          </Link>
        </div>
      </Banner>
    </SimpleHero>
  );
};

export default Home;
