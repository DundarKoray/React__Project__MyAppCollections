import { randomMainFood, randomLunch, randomDessert, mixMainFoods, dinnerData, lunchData, dessertData } from "./FoodList";
import InnerNavBar from "../InnerNavBar/InnerNavBar";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";
import SingleDish from "./SingleDish";
import zucchiniChicken from "./images/zuccini-chicken.jpeg";
import makaroniLaatikko from "./images/makaroniLaatikko.jpg";
import adanaKebap from "./images/adana.jpg";

class WhatToEatV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      data: ""
    };
 
  }

 
  dinner(){
    this.setState({
      status: 'dinner',
      data: dinnerData
    })
  }

  lunch(){
    this.setState({
      status: 'lunch',
      data: lunchData

    })
  }

  dessert(){
    this.setState({
      status: 'dessert',
      data: dessertData
    })
  }
  

  

  render() {
    
  
    return (
      <div className={styles.wrapper}>
        <InnerNavBar text="back" />
        
          <h2>What To Eat V2</h2>
          <p>This app helps you to decide what to cook.</p>
          <p>First choose meal type and then swipe.</p>
          <br />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <button
            active
              style={{ marginRight: "10px", padding: "0.4rem .8rem" }}
              className={this.state.status === "lunch" ? "btn-primary" : styles.btn}
              onClick={()=>this.lunch()}
            >
              lunch
            </button>
            <button
              className={this.state.status === "dinner" ? "btn-primary" : styles.btn}
              style={{ marginRight: "10px", padding: "0.4rem .8rem" }}
              onClick={()=>this.dinner()}
            >
              dinner
            </button>
            <button
              style={{ padding: "0.4rem .8rem" }}
              className={this.state.status === "dessert" ? "btn-primary" : styles.btn}
              onClick={()=>this.dessert()}
            >
              dessert
            </button>
          </div>
          
           <br/>
          <div style={{margin:'auto',width:'350px'}}>
            {this.state.data ? 
            <Slider >
              {
                this.state.data.map((item, key) => {
                  return (
                    <div style={{}} key={key}>
                  <SingleDish
                  link={item.link}
                  image={item.image}
                  title={item.name}
                  key={key}
                  ingredients={item.ingredients.join(", ")}
                  />
                  </div>)
                })
              

              
              }
             
            </Slider>
            : null}
              </div>
              
          
          <br />

          

          <br />
        </div>
      
    );
  }
}

export default WhatToEatV2;
