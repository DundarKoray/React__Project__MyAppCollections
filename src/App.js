import React from "react";
import Layout from "./Layout";
import Home from "./Home/Home";
import About from "./About/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FlipCoin from './FlipCoin/App';
import HangMan from './HangMan/App';
import ColorBoxes from './ColorBoxes/App';
import BoxGenerator from './BoxGenerator/App'
import SlotMachine from './SlotMachine/App'
import ToDo from './ToDoList/App'
import FlipCoinV2 from './FlipCoinV2/App'
// import WhatToEat from "./WhatToEat/App";
import WhatToEatV2 from "./WhatToEatV2/App";

const App = () => {
  return (
    <BrowserRouter>
    <Layout>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route  path="/flipCoin" component={FlipCoin} exact />
        <Route  path="/hangMan" component={HangMan} exact />
        <Route  path="/colorBoxes" component={ColorBoxes} exact />
        <Route  path="/boxGenerator" component={BoxGenerator} exact />
        <Route  path="/slotMachine" component={SlotMachine} exact />
        <Route  path="/toDo" component={ToDo} exact />
        <Route  path="/flipCoinV2" component={FlipCoinV2} exact />
        {/* <Route  path="/whatToEat" component={WhatToEat} exact /> */}
        <Route  path="/whatToEatV2" component={WhatToEatV2} exact />
      </Switch>
    </Layout>
    </BrowserRouter>
  );
};

export default App;
