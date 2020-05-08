import React from 'react';
import SimpleHero from "../SimpleHero/SimpleHero";
import Banner from "../Banner/Banner";
import FlipCoin from '../FlipCoin/CoinContainer'
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Layout from '../Layout';
import './home.css'
const Home = () => {
    return (
        
      <div>

        <SimpleHero>
          <Banner
            title="React Excersices"
            info="Welcome to my coding playground! Here are few small fun React apps."
            >
           

            <div className="home-center">

            <Link style={{margin:"10px"}} className="btn-primary" to="/flipCoin">Flip A Coin</Link>
            <Link style={{margin:"10px"}}className="btn-primary" to="/hangMan">Hang Man</Link>
            <Link style={{margin:"10px"}}className="btn-primary" to="/colorBoxes">Color Boxes</Link>
            
            </div>

            
              
          </Banner>

          
        </SimpleHero>
            
            </div>
      
    );
};

export default Home;