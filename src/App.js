import React from "react";
import Layout from "./Layout";
import Home from "./Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FlipCoin from './FlipCoin/App';
import HangMan from './HangMan/App';
import ColorBoxes from './ColorBoxes/App';
import BoxGenerator from './BoxGenerator/App'
import SlotMachine from './SlotMachine/App'
import ToDoList from './ToDoList/App'
import FlipCoinV2 from './FlipCoinV2/App'
import WhatToEat from "./WhatToEat/App";

const App = () => {
  return (
    <BrowserRouter>
    <Layout>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/flipCoin" component={FlipCoin} exact />
        <Route  path="/hangMan" component={HangMan} exact />
        <Route  path="/colorBoxes" component={ColorBoxes} exact />
        <Route  path="/boxGenerator" component={BoxGenerator} exact />
        <Route  path="/slotMachine" component={SlotMachine} exact />
        <Route  path="/toDoList" component={ToDoList} exact />
        <Route  path="/flipCoinV2" component={FlipCoinV2} exact />
        <Route  path="/whatToEat" component={WhatToEat} exact />
      </Switch>
    </Layout>
    </BrowserRouter>
  );
};

export default App;
