import React from "react";
import './singleDish.css';

const SingleDish = (props) => {
    const {title, ingredients, image, link} = props
  return (
    <div className="plan-box">
      <div>
          <div style={{display:'flex', justifyContent:'center',alignItems:'center',height:'60px'}}>
        <p>{title}</p>

          </div>
        <div style={{height:'200px', overflow:'hidden'}}>
        <img alt="dishes" style={{width: '100%', margin:'auto'}} src={image}/>

        </div>
      </div>
      <div style={{height:'70px'}}>
        <p className="plan-price-meal">{ingredients}</p>
      </div>
      
        <a href={link} target="_blank" rel="noopener noreferrer" style={{margin:'1rem',padding: '0.4rem .8rem'}} className="howToCookButton">How to Cook</a>
      
    </div>
  );
};

export default SingleDish;
