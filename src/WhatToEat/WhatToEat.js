import { randomMainFood, randomLunch, randomDessert } from "./FoodList";
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import { Component } from "react";
import styles from "./style.module.css";
import SingleDish from "./SingleDish";

class WhatToEat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Adana Kebap",
      ingredients: ["ground lamb, ", "red bell pepper, ", "onion"],
      link: "http://www.kebabhouseselcuk.com/adana-kebab-recipe.html",
      image: "https://i.pinimg.com/originals/f5/87/a8/f587a8486a11272b8d9854d7830e95bf.jpg",
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
          <p>This app helps you to decide what to cook.</p>
          <br />
          <div className={styles.cardWrapper}>
            {this.state.name ? (
              <SingleDish
                link={this.state.link}
                image={this.state.image}
                title={this.state.name}
                ingredients={this.state.ingredients}
              />
            ) : null}
          </div>
          <br />
          {/* <p>Keep pressing button till you find the right dish for you.</p> */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
              style={{ marginRight: "10px", padding: "0.4rem .8rem" }}
              className="btn-primary"
              onClick={this.letsEatLunch}
            >
              lunch
            </button>
            <button
              className="btn-primary"
              style={{ marginRight: "10px", padding: "0.4rem .8rem" }}
              onClick={this.letsEatDinner}
            >
              dinner
            </button>
            <button
              style={{ padding: "0.4rem .8rem" }}
              className="btn-primary"
              onClick={() => this.letsEatDessert()}
            >
              dessert
            </button>
          </div>
          
          <br/>
        </div>
      </div>
    );
  }
}

export default WhatToEat;
