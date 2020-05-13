import { randomMainFood, randomLunch, randomDessert } from "./FoodList";
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import React, { Component } from "react";
import styles from "./style.module.css";
import SingleDish from "./SingleDish";

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
    // console.log(lunch);
    this.setState({
      name: lunch.name,
      ingredients: lunch.ingredients.join(", "),
      link: lunch.link,
      image: lunch.image,
    });
  }

  letsEatDinner() {
    const dinner = randomMainFood();
    // console.log(dinner);
    this.setState({
      name: dinner.name,
      ingredients: dinner.ingredients.join(", "),
      link: dinner.link,
      image: dinner.image,
    });
  }

  letsEatDessert() {
    const dessert = randomDessert();
    // console.log(dessert);
    this.setState({
      name: dessert.name,
      ingredients: dessert.ingredients.join(", "),
      link: dessert.link,
      image: dessert.image,
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <InnerNavBar text="back" />
        <div>
          <h2>What To Eat ?</h2>
          <p>
            You are hungry and don't know what to eat/prepare? Well, this app
            will help you to decide what to cook.
          </p>
          <div style={{  display: "flex", flexWrap:'wrap', justifyContent: "center" }}>
            <button style={{marginRight:'10px', padding: '0.4rem .8rem'}} className="btn-primary" onClick={this.letsEatLunch}>
              lunch
            </button>
            <button style={{marginRight:'10px', padding: '0.4rem .8rem'}} className="btn-primary" onClick={()=> this.letsEatDessert()}>
              dessert
            </button>
            <button className="btn-primary" style={{padding: '0.4rem .8rem'}} onClick={this.letsEatDinner}>
              dinner
            </button>
          </div>
          <br />
          <br />
          {/* <p>{this.state.name}</p>
          <div style={{ overflow: "hidden" }}>
            {this.state.image ? (
              <img style={{ width: "280px" }} src={this.state.image} />
            ) : null}
          </div>
          <br />
          <p>{this.state.ingredients}</p>
          {this.state.link ? (
            <button className="btn-primary" href={this.state.link}>
              How to Cook
            </button>
          ) : null} */}
          <div className={styles.cardWrapper}>

        {this.state.name ? <SingleDish link={this.state.link} image={this.state.image} title={this.state.name} ingredients={this.state.ingredients} /> : null }
          </div>
        </div>

        
      </div>
    );
  }
}

export default WhatToEat;
