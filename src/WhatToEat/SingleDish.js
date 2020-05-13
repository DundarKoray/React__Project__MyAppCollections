import React from "react";
import './singleDish.css';

const SingleDish = (props) => {
    const {title, ingredients, image, link} = props
  return (
    <div className="plan-box">
      <div>
          <div style={{height:'50px'}}>
        <p>{title}</p>

          </div>
        <div style={{height:'200px', overflow:'hidden'}}>
        <img style={{width: '100%'}} src={image}/>

        </div>
      </div>
      <div style={{height:'70px'}}>
        <p className="plan-price-meal">{ingredients}</p>
      </div>
      <div>
        <button href={link} className="btn-primary">How to Cook</button>
      </div>
    </div>
  );
};

export default SingleDish;
