import React from "react";
import Layout from "./Layout";
import Home from "./Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FlipCoin from './FlipCoin/CoinContainer';
import HangMan from './HangMan/Hangman';
import ColorBoxes from './ColorBoxes/BoxContainer';
import BoxGenerator from './BoxGenerator/App'

const App = () => {
  return (
    <BrowserRouter>
    <Layout>

      <Switch>
        <Route exact path="/" component={Home} exact />
        <Route exact path="/flipCoin" component={FlipCoin} exact />
        <Route exact path="/hangMan" component={HangMan} exact />
        <Route exact path="/colorBoxes" component={ColorBoxes} exact />
        <Route exact path="/boxGenerator" component={BoxGenerator} exact />
      </Switch>
    </Layout>
    </BrowserRouter>
  );
};

export default App;
