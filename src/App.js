import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import About from "./About/About";

// APPS
import FlipCoin from './FlipCoin/App';
import HangMan from './HangMan/App';
import ColorBoxes from './ColorBoxes/App';
import BoxGenerator from './BoxGenerator/App'
import SlotMachine from './SlotMachine/App'
import ToDo from './ToDoList/App'
import FlipCoinV2 from './FlipCoinV2/App'
import WhatToEatV2 from "./WhatToEatV2/App";
import DadJokes from "./DadJokes/App";
import DrinkingGame from "./DrinkingGame/App";
import Tours from "./Tours/App";
import Employees from "./Employees/App";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions/App";
import FoodMenu from "./FoodMenu/App";
import TabsJobExperiences from "./TabsJobExperiences/App";
import SliderReviews from "./SliderReviews/App";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/flipCoin" component={FlipCoin} exact />
          <Route path="/hangMan" component={HangMan} exact />
          <Route path="/colorBoxes" component={ColorBoxes} exact />
          <Route path="/boxGenerator" component={BoxGenerator} exact />
          <Route path="/slotMachine" component={SlotMachine} exact />
          <Route path="/toDoList" component={ToDo} exact />
          <Route path="/flipCoinV2" component={FlipCoinV2} exact />
          <Route path="/whatToEatV2" component={WhatToEatV2} exact />
          <Route path="/dadJokes" component={DadJokes} exact />
          <Route path="/drinkingGame" component={DrinkingGame} exact />
          <Route path="/tours" component={Tours} exact />
          <Route path="/employees" component={Employees} exact />
          <Route path="/frequentlyAskedQuestions" component={FrequentlyAskedQuestions} exact />
          <Route path="/foodMenu" component={FoodMenu} exact />
          <Route path="/tabsJobExperiences" component={TabsJobExperiences} exact />
          <Route path="/sliderReviews" component={SliderReviews} exact />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
