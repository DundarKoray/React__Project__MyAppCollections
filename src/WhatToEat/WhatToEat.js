import { randomMainFood, randomLunch } from "./FoodList";
import InnerNavBar from "../InnerNavBar/InnerNavBar";

import React, { Component } from "react";

class WhatToEat extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: "",
        ingredients: "",
        link: "",
        image: "",
    };
    this.letsEatLunch = this.letsEatLunch.bind(this);
    this.letsEatDinner = this.letsEatDinner.bind(this);
  }

  letsEatLunch() {
    const lunch = randomLunch();
    console.log(lunch)
    this.setState({
        name: lunch.name,
        ingredients: lunch.ingredients.join(", "),
        link: lunch.link,
        image: lunch.image
    })

  }

  letsEatDinner() {
    const dinner = randomMainFood();
    console.log(dinner)
    this.setState({
        name: dinner.name,
        ingredients: dinner.ingredients.join(", "),
        link: dinner.link,
        image: dinner.image
    })
  }

  render() {
      
    return (
      <div>
        <InnerNavBar text="back" />
        <div style={{width: "80%",margin: "0 auto", textAlign:"center"}}>

        <h2>What To Eat ?</h2>
        <p>You are hungry and don't know what to eat/prepare? Well, this app will help you to decide what to cook.</p>
        <div style={{ display: "flex", justifyContent:"space-between"}}>
        <button className="btn-primary" onClick={this.letsEatLunch}>I wanna eat lunch</button>
        <button className="btn-primary" onClick={this.letsEatDinner}>I wanna eat dinner</button>
        </div>
        <br/>
        <br/>
        <p>{this.state.name}</p>
    <div style={{height: '300px', overflow: "hidden"}}>

        {this.state.image ? <img style={{width: '500px'}} src={this.state.image} /> : null}
    </div>
    <br/>
        <p>{this.state.ingredients}</p>
        {this.state.link ? <button className="btn-primary" href={this.state.link}>How to Cook</button> : null }
    
        </div>
      </div>
    );
  }
}

export default WhatToEat;
